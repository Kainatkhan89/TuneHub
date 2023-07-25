import React from 'react';
import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react';

function LeftSidePanel({ selectedTab, handleTabChange }) {
    return (
        <Flex w="180px" minH="100vh" zIndex="1" >
            <Tabs
                index={selectedTab}
                onChange={handleTabChange}
                orientation="vertical"
                backgroundColor="#050A30"
                h="100%"
                pt="12px"
                pr="0px"
                variant="unstyled"
            >
                <TabList gap="8px">
                    <Tab color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Songs</Tab>
                    <Tab color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Add Song</Tab>
                    <Tab color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Review Moderation</Tab>
                </TabList>
            </Tabs>
        </Flex>
    );
}

export default LeftSidePanel;