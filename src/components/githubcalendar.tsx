'use client'
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.default),
  { ssr: false }
);

// Default green theme
const DEFAULT_GREEN_THEME = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

// Dark mode green theme
const DARK_GREEN_THEME = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const THEMES = {
  dark: DARK_GREEN_THEME,
  light: DEFAULT_GREEN_THEME
};

interface GitHubCalendarWrapperProps {
  username?: string;
}

const GitHubCalendarWrapper: React.FC<GitHubCalendarWrapperProps> = ({ username = "dishit7" }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { theme = 'light' } = useTheme();

  useEffect(() => {
    const scrollToRightmost = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft = container.scrollWidth;
      }
    };
    const timeoutId = setTimeout(scrollToRightmost, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  // Filter contributions from March to December
  const transformData = (contributions: any) => {
    const currentYear = new Date().getFullYear();
    const marchStart = new Date(currentYear, 2, 1); // March 1st (month is 0-indexed)
    const decemberEnd = new Date(currentYear, 11, 31); // December 31st

    return contributions.filter((day: any) => {
      const date = new Date(day.date);
      return date >= marchStart && date <= decemberEnd;
    });
  };

  const themeColors = {
    [theme === 'dark' ? 'dark' : 'light']: THEMES[theme === 'dark' ? 'dark' : 'light']
  };

  return (
    <div 
      ref={scrollContainerRef} 
      style={{ 
        overflowX: 'scroll', 
        whiteSpace: 'nowrap',
        width: '100%', 
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none',
      }}
    >
      <div style={{ display: 'inline-block' }}> 
        <GitHubCalendar 
          username={username}
          transformData={transformData}
          fontSize={12} 
          blockRadius={2}
          blockSize={14}
          blockMargin={3}
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
        />
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <GitHubCalendarWrapper username="dishit7" />
    </div>
  );
};

export default GitHubCalendarWrapper;