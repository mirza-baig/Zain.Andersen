<%@ Page Language="C#" AutoEventWireup="true" Debug="true" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<%@ Import Namespace="System" %>
<%@ Import Namespace="System.Collections" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Configuration" %>
<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Web.Security" %>
<%@ Import Namespace="System.Web.UI" %>
<%@ Import Namespace="System.Web.UI.HtmlControls" %>
<%@ Import Namespace="System.Web.UI.WebControls" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="Sitecore.Configuration" %>

<script language="C#" runat="server">   

    private void InitializeComponent()
    {
        this.btnValue.Click += new EventHandler(this.btnValue_Click);
        base.Load += new EventHandler(this.Page_Load);
    }

    protected override void OnInit(EventArgs e)
    {
        this.InitializeComponent();
        base.OnInit(e);
    }

    /// <summary>
    /// This function will be used
    /// to be get called on page_load
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    private void Page_Load(object sender, EventArgs e)
    {

    }

    /// <summary>
    /// Read the value of the AppSettings
    /// </summary>
    protected void btnValue_Click(object sender, EventArgs e)
    {
        lblAppSettingsValue.Text = Settings.GetAppSetting(txtAppSettingsKey.Text, "Not Available.");        
    }   
</script>

<html>
<head>
    <title>AppSetting Viewer</title>
    <meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR">
    <meta content="C#" name="CODE_LANGUAGE">
    <meta content="JavaScript" name="vs_defaultClientScript">
    <meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema">
    <style type="text/css">
        body
        {
            font-size: medium;
            color: #000;
            font-family: "Lucida Grande" , "Calibri" , helvetica, sans-serif;
            scrollbar-3dlight-color: #DDEAF9;
            scrollbar-arrow-color: #1C3C82;
            scrollbar-base-color: #DDEAF9;
            scrollbar-darkshadow-color: #DDEAF9;
            scrollbar-face-color: #DDEAF9;
            scrollbar-highlight-color: black;
            scrollbar-shadow-color: black;
            font-size: small;
            background: #F7F7F7 none repeat scroll 0 0;
        }
        .button
        {
            -moz-border-radius-bottomleft: 7px;
            -moz-border-radius-bottomright: 7px;
            -moz-border-radius-topleft: 7px;
            -moz-border-radius-topright: 7px;
            background-color: #DDEAF9;
            border: 1px solid #AAB7C6;
            display: inline-block;
            margin: 0 5px 10px 0;
            padding: 3px;
            border-color: darkgreen;
        }
        .data
        {
            border-collapse: collapse;
            margin: 10px 0 0;
            width: 100%;
            border-color: darkgreen;
        }
        .data td
        {
            border: 1px solid darkgreen;
            padding: 5px;
        }
        #content
        {
            -moz-border-radius-bottomleft: 7px;
            -moz-border-radius-bottomright: 7px;
            -moz-border-radius-topleft: 7px;
            -moz-border-radius-topright: 7px;
            background-color: #FFFFFF;
            border: 2px solid #FFFFFF;
            color: black;
            line-height: 1.5em;
        }
        #shortnotice
        {
            background-color: #FFDDDD;
            border: 1px solid #FFDDDD;
            font-weight: bold;
            width: 97%;
        }
    </style>
</head>
<body>
    <form id="Form1" method="post" runat="server">
        <div>
           <h1> AppSetting Values</h1>
			<ul>
				<li>env:define <%= Settings.GetAppSetting("env:define", "MyValue") %></li>
				<li>role:define <%= Settings.GetAppSetting("role:define", "MyValue") %></li>
			</ul>
        </div>
        <div>
            <span>Enter App Setting Key: </span><asp:TextBox id="txtAppSettingsKey"  runat="server"/>
        </div>
        <div>
            <asp:Button ID="btnValue" runat="server" Text="Get Value" OnClick="btnValue_Click" />
        </div>
        <div>
            <span>App Setting Value: </span><asp:Label id="lblAppSettingsValue"  runat="server"/>
        </div>
    </form>
</body>
</html>