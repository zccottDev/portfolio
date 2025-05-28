import React from 'react';
import { Icon } from '@iconify/react';
import { Switch, Tooltip } from '@heroui/react';
import { useTheme } from "@heroui/use-theme";
import { motion } from 'framer-motion';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <Tooltip 
      content={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom"
    >
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.1, rotate: isDark ? 0 : 25 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon 
            icon="lucide:sun" 
            className={`text-xl ${!isDark ? "text-warning-500" : "text-default-500"}`} 
          />
        </motion.div>
        <Switch 
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
          className="mx-1"
        />
        <motion.div
          whileHover={{ scale: 1.1, rotate: isDark ? -25 : 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon 
            icon="lucide:moon" 
            className={`text-xl ${isDark ? "text-primary-500" : "text-default-500"}`} 
          />
        </motion.div>
      </div>
    </Tooltip>
  );
};