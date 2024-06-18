import { useEffect, useState } from 'react';

// material-ui
import { Divider, IconButton, Tab, Tabs } from '@mui/material';

// assets
import { Close } from '@mui/icons-material';

// ==============================|| CONTENT TABS ||============================== //

type Tab = { label: string; content: React.ReactNode };

interface ContentTabsProps {
  tabs?: Tab[];
  selected?: number;
}

const ContentTabs = (props: ContentTabsProps) => {
  const [selected, setSelected] = useState(0);
  const [tabs, setTabs] = useState<(Tab & { index: number })[]>([]);

  useEffect(() => {
    setTabs((props.tabs ?? []).map((tab, index) => ({ ...tab, index })));
  }, [props.tabs]);

  useEffect(() => {
    setSelected(props.selected ?? 0);
  }, [props.selected]);

  const handleClick = (_event: React.SyntheticEvent, newKey: number) => {
    setSelected(newKey);
  };

  const handleRemove = (event: React.SyntheticEvent, removeKey: number) => {
    event.stopPropagation();

    // Removing the current tab, set the key to the next/previous tab
    if (selected === removeKey) {
      const removeIndex = tabs.findIndex((tab) => tab.index === removeKey);
      const tab = tabs[removeIndex + 1] || tabs[removeIndex - 1];
      setSelected(tab?.index || -1);
    }

    setTabs(tabs.filter((tab) => tab.index !== removeKey));
  };

  return (
    <>
      <Tabs value={selected} onChange={handleClick} variant="scrollable">
        {tabs.map((tab) => (
          <Tab
            key={tab.index}
            value={tab.index}
            label={
              <span>
                {tab.label}

                {/* We can enable close button, if we want */}
                {false && (
                  <IconButton
                    component="div"
                    tabIndex={-1}
                    size="small"
                    onClick={(event) => handleRemove(event, tab.index)}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      zIndex: 1,
                      padding: '4px'
                    }}
                  >
                    <Close sx={{ fontSize: '0.8rem' }} />
                  </IconButton>
                )}
              </span>
            }
            {...a11yProps(tab.index)}
          />
        ))}
      </Tabs>
      <Divider />
      {tabs.find((tab) => tab.index === selected)?.content}
    </>
  );
};

const a11yProps = (index: number) => ({
  id: `content-tab-${index}`,
  'aria-controls': `content-tabpanel-${index}`,
  tabIndex: 0
});

export default ContentTabs;
