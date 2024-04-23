import type { NextApiRequest, NextApiResponse } from 'next';
import {
  ConsecutiveBreaker,
  ExponentialBackoff,
  retry,
  handleAll,
  circuitBreaker,
  TimeoutStrategy,
  timeout,
  wrap,
} from 'cockatiel';

const anonymousUserId = {
  name: 'anonymous',
  provider: 'Email Security Provider',
};

const apiKey = process.env.EW_COVEO_API_KEY || '';

export const getAccessToken = async (organizationId: string): Promise<string> => {
  // Create a retry policy that'll try whatever function we execute 3
  // times with a randomized exponential backoff.
  const retryPolicy = retry(handleAll, { maxAttempts: 3, backoff: new ExponentialBackoff() });

  // Create a circuit breaker that'll stop calling the executed function for 2
  // seconds if it fails 5 times in a row.
  const circuitBreakerPolicy = circuitBreaker(handleAll, {
    halfOpenAfter: 2 * 1000,
    breaker: new ConsecutiveBreaker(5),
  });

  // Create a timeout policy that specifies the duration of how long to wait
  // before timing out execute()'d functions
  const timeoutPolicy = timeout(5000, TimeoutStrategy.Cooperative);

  // Create a policy that retries 3 times, calling through the circuit breaker, and timesout after 5 seconds
  const retryWithBreaker = wrap(retryPolicy, circuitBreakerPolicy, timeoutPolicy);

  const payload = JSON.stringify({
    userIds: [anonymousUserId],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: payload,
  };

  const response = await retryWithBreaker.execute(() =>
    fetch(
      `https://platform.cloud.coveo.com/rest/search/v2/token?organizationid=${organizationId}`,
      requestOptions
    )
  );

  const data = await response.json();
  return data.token;
};

const coveoAccessTokenApi = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const organizationid = req.query['organizationid'];

  if (organizationid === undefined || Array.isArray(organizationid)) {
    return res.status(400).end();
  }

  const token = await getAccessToken(organizationid);

  return res.status(200).json({ token });
};

export default coveoAccessTokenApi;
