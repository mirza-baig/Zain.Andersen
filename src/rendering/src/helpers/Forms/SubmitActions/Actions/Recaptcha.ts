import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../BaseSubmitAction';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    grecaptcha: any;
    initializeRecaptcha: () => void;
  }
}

type ExtendedActionFieldProps =
  Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.Recaptcha['fields'];

export class Recaptcha extends BaseSubmitAction {
  private scriptId = 'recaptcha-script';

  constructor(params: BaseSubmitProps) {
    super(params);
    this.loadRecaptchaScript();
  }

  private async executeRecaptcha(userAction: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      const checkGrecaptcha = () => {
        if (window.grecaptcha && typeof window.grecaptcha.enterprise.execute === 'function') {
          window.grecaptcha.enterprise
            .execute(process.env.NEXT_PUBLIC_EW_RECAPTCHA_SITE_KEY, {
              action: userAction,
            })
            .then(resolve);
        } else {
          setTimeout(checkGrecaptcha, 100);
        }
      };
      checkGrecaptcha();
    });
  }

  private async verifyRecaptcha(token: string, userAction: string): Promise<ExecutionResult> {
    const response = await fetch('/api/enterprise/submit-actions/verify-recaptcha/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, userAction }),
    });

    if (!response.ok) {
      return { success: false, errorMessage: this.actionFieldsProps?.errorMessage?.value };
    }

    const verificationResult = await response.json();
    const minimumScoreValue = this.actionFieldsProps?.minimumScoreValue?.value ?? 0.1;

    if (
      verificationResult.riskAnalysis?.score <= minimumScoreValue ||
      !verificationResult.tokenProperties?.valid ||
      verificationResult.tokenProperties?.action !== userAction
    ) {
      return {
        success: false,
        errorMessage: this.actionFieldsProps?.errorMessage?.value,
        verificationResult: verificationResult,
      };
    }

    return {
      success: true,
      errorMessage: this.actionFieldsProps?.errorMessage?.value,
      verificationResult: verificationResult,
    };
  }

  private async initializeRecaptcha(): Promise<void> {
    const userAction = this.actionFieldsProps?.userAction?.value as string;
    await this.executeRecaptcha(userAction);
  }

  private loadRecaptchaScript(): void {
    const existingScript = document.getElementById(this.scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_EW_RECAPTCHA_SITE_KEY}`;
      script.id = this.scriptId;

      script.onload = async () => {
        // If the script has loaded, trigger the initial execution
        await this.initializeRecaptcha();
      };

      document.body.appendChild(script);

      window.initializeRecaptcha = async () => {
        await this.initializeRecaptcha();
      };
    }
  }
  override actionFieldsProps: ExtendedActionFieldProps = this.actionFieldsProps;

  override async executeAction(): Promise<ExecutionResult> {
    const errorMessage = this.actionFieldsProps?.errorMessage?.value;
    const userAction = this.actionFieldsProps?.userAction?.value as string;

    try {
      const token = (await this.executeRecaptcha(userAction)) as string;
      return this.verifyRecaptcha(token, userAction);
    } catch (error) {
      return { success: false, errorMessage: errorMessage };
    }
  }
}
