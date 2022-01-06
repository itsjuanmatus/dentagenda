import React from 'react';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Finance from './Finance';
import Settings from './Settings';
import Patients from './Patients';

interface Icons {
  [key: string]: React.FC<{ size: number; color: string; active: boolean }>;
}

const icons: Icons = {
  dashboard: Dashboard,
  calendar: Calendar,
  finance: Finance,
  settings: Settings,
  patients: Patients,
};

const Icon = ({
  name,
  size,
  color,
  active,
}: {
  name: string;
  size: number;
  color: string;
  active: boolean;
}) => {
  const IconComponent = icons[name];
  if (IconComponent) return <IconComponent {...{ size, color, active }} />;
  else throw new Error('Icon name not found.');
};

export default Icon;
