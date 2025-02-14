import SettingsForm from "../features/settings/SettingsForm";

const Settings = () => {
  return (
    <div className="mx-25">
      <span className="text-2xl">Settings</span>
      <div className="pt-2">
        <SettingsForm />
      </div>
    </div>
  );
};

export default Settings;
