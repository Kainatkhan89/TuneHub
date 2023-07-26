import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftSidePanel({ selectedTab }) {
    return (
            <Tabs
                index={selectedTab}
                orientation="vertical"
                backgroundColor="#050A30"
                h="100%"
                pt="12px"
                pr="0px"
                variant="unstyled"
                justifyContent="center"
            >
                <TabList gap="8px" mt = "8px">
                    <NavLink to="/admin"> 
                    <Tab color="white" width = "11vw" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Songs</Tab>
                    </NavLink>
                    <NavLink to="/admin/addSong"> 
                    <Tab color="white" width = "11vw"_selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Add Song</Tab>
                    </NavLink>
                    {/* <NavLink to="/admin"> 
                    <Tab color="white" width = "100%"  _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Review Moderation</Tab>
                    </NavLink> */}
                </TabList>
            </Tabs>
    );
}

export default LeftSidePanel;