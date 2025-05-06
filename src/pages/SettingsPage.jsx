import "./SettingsPage.css";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from "react";

function SettingsPage() {
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();
  const [selectedSection, setSelectedSection] = useState("Appearance");
  const [theme, setTheme] = useState("light");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [searchEngineIndexing, setSearchEngineIndexing] = useState(false);
  const [notificationFrequency, setNotificationFrequency] = useState("daily");
  const [smsAlerts, setSmsAlerts] = useState(false);
  const isPremiumUser = user?.publicMetadata?.isPremiumUser || false;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nodeRefs = {
    Appearance: useRef(null),
    Privacy: useRef(null),
    Notifications: useRef(null),
    Premium: useRef(null),
    HelpCenter: useRef(null),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  const handleBack = () => {
    navigate("/dashboard");
  };

  {
    /* Change appearance effects: */
  }
  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize =
      fontSize === "small" ? "12px" : fontSize === "medium" ? "16px" : "32px"; // for extreme testing
  }, [fontSize]);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add("reduced-motion");
    } else {
      document.body.classList.remove("reduced-motion");
    }
  }, [reducedMotion]);

  const renderContent = () => {
    switch (selectedSection) {
      case "Appearance":
        return (
          <div>
            <h2>Appearance Settings</h2>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="theme"
                id="lightTheme"
                value="light"
                checked={theme === "light"}
                onChange={(e) => setTheme(e.target.value)}
              />
              <label className="form-check-label bigfont" htmlFor="lightTheme">
                Light Theme
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="theme"
                id="darkTheme"
                value="dark"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.value)}
              />
              <label className="form-check-label bigfont" htmlFor="darkTheme">
                Dark Theme
              </label>
            </div>
            <div className="bigfont mt-2 form-group">
              <hr style={{ border: "1px solid --text-color", width: "100%" }} />
              <label htmlFor="fontSize">Font Size:</label>
              <select
                className="bigfont form-control ml-2"
                id="fontSize"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="form-check">
              <input
                className="mt-2 form-check-input"
                type="checkbox"
                id="reducedMotion"
                checked={reducedMotion}
                onChange={() => setReducedMotion(!reducedMotion)}
              />
              <label className="form-check-label" htmlFor="reducedMotion">
                Reduce motion (animations, transitions)
              </label>
            </div>
          </div>
        );

      case "Privacy":
        return (
          <div>
            <h2>Privacy Settings</h2>
            <div className="bigfont form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="privateProfile"
                checked={privateProfile}
                onChange={() => setPrivateProfile(!privateProfile)}
              />
              <label
                className="bigfontform-check-label"
                htmlFor="privateProfile"
              >
                Make my profile private
              </label>
            </div>
            <div className="bigfont form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="showOnlineStatus"
                checked={showOnlineStatus}
                onChange={() => setShowOnlineStatus(!showOnlineStatus)}
              />
              <label className="form-check-label" htmlFor="showOnlineStatus">
                Show my online status
              </label>
            </div>

            <div className="bigfont form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="searchEngineIndexing"
                checked={searchEngineIndexing}
                onChange={() => setSearchEngineIndexing(!searchEngineIndexing)}
              />
              <label
                className="form-check-label"
                htmlFor="searchEngineIndexing"
              >
                Allow search engines to index my profile
              </label>
            </div>
          </div>
        );

      case "Notifications":
        return (
          <div>
            <h2>Notification Settings</h2>
            <div className="bigfont form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="emailNotifications"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
              <label className="form-check-label" htmlFor="emailNotifications">
                Enable email notifications
              </label>
            </div>

            <div className="bigfont form-group mt-2">
              <hr style={{ border: "1px solid --text-color", width: "100%" }} />
              <label htmlFor="notificationFrequency">
                Notification Frequency
              </label>
              <select
                className="bigfont form-control ml-2"
                id="notificationFrequency"
                value={notificationFrequency}
                onChange={(e) => setNotificationFrequency(e.target.value)}
              >
                <option value="realtime">Real-time</option>
                <option value="daily">Daily Summary</option>
                <option value="weekly">Weekly Summary</option>
                <option value="never">Never</option>
              </select>
            </div>

            <div className="bigfont form-check mt-2">
              <hr style={{ border: "1px solid --text-color", width: "100%" }} />
              <input
                className="form-check-input"
                type="checkbox"
                id="smsAlerts"
                checked={smsAlerts}
                onChange={() => setSmsAlerts(!smsAlerts)}
              />
              <label className="form-check-label" htmlFor="smsAlerts">
                Enable SMS alerts
              </label>
            </div>
          </div>
        );

      case "Premium":
        return (
          <div className="premium-container text-center">
            <h2 className="premium-title">Premium Benefits:</h2>
            <p className="premium-intro">
              This project thrives on the support of dedicated educators and
              professionals. To ensure its continued development and
              sustainability, premium memberships provide the resources
              necessary to keep the platform running while delivering enhanced
              features for an optimized experience.
            </p>
            <hr style={{ border: "1px solid --text-color", width: "100%" }} />
            <ul className="premium-benefits mt-8">
              <li>&#8226; Unlimited projects</li>
              <li>&#8226; Priority support</li>
              <li>&#8226; Advanced analytics</li>
              <li>&#8226; Exclusive Templates & Design Customization</li>
              <li>&#8226; Early Access to New Features</li>
              <li>&#8226; Collaboration Tools</li>
              <li>&#8226; Ad-Free Experience</li>
            </ul>
            <img
              src="/Premium.png"
              alt="Premium Features"
              className="premium-image"
              style={{ width: "100px", height: "auto" }}
            />
            <div className="premium-button-container">
              {isPremiumUser ? (
                <button className="btn btn-danger">Cancel Subscription</button>
              ) : (
                <button className="btn btn-warning">Upgrade to Premium</button>
              )}
            </div>
          </div>
        );

      case "Help Center":
        return (
          <div>
            <h2>Help Center</h2>
            <p>
              If you're experiencing issues, please contact
              support@autoplan.com.
            </p>
            <button className="btn btn-info helpcenter">
              Visit Help Center
            </button>
            <hr style={{ border: "1px solid --text-color", width: "100%" }} />
            <p className="font-semibold">
              Alternatively, contact us via message:
            </p>
            <div className="help-center-form">
              {isSubmitted ? (
                <button
                  className="btn btn-success mt-2 default-cursor"
                  disabled
                >
                  Submitted ✔ <br />
                  We'll get back to you soon!
                </button>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="helpEmail" className="help-email-label">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      className="form-control bigfont ml-2"
                      id="helpEmail"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="helpMessage" className="help-message-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control ml-2"
                      id="helpMessage"
                      rows="6"
                    ></textarea>
                  </div>
                  <button className="btn btn-primary mt-2" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        );

      default:
        return <div>Select a setting from the menu.</div>;
    }
  };

  return (
    <div className="settings-container overflow">
      <div className="sidebar">
        <h3 className="sidebar-title">Settings</h3>
        <ul className="settings-nav">
          {[
            "Appearance",
            "Privacy",
            "Notifications",
            "Premium",
            "Help Center",
          ].map((section) => (
            <li
              key={section}
              className={`nav-item ${
                selectedSection === section ? "active" : ""
              }`}
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
        <button className="btn btn-outline-secondary mt-4" onClick={handleBack}>
          ← Go Back
        </button>
      </div>

      <div
        key={selectedSection}
        className={`settings-content fade-animation-${selectedSection.replace(
          /\s/g,
          ""
        )}`}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default SettingsPage;
