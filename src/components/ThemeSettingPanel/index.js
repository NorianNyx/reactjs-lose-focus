import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

const ThemeSettingPanel = ({ name, children }) => {
    return (
        <PanelGroup accordion id='sidebar-accordion-panelGroup'>
            <Panel>
                <Panel.Heading>
                    <Panel.Title toggle>{name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    {children}
                </Panel.Body>
            </Panel>
        </PanelGroup>
    );
};

export default ThemeSettingPanel;
