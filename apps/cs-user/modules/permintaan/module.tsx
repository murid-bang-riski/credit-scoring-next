import { useState } from 'react';
import React from 'react';
import { RequestAI } from './permintaan';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import { Result } from './hasil';
import {Process} from './process';

interface StyleObject {
    [key: string]: string | number;
  }

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    styleName: StyleObject;
  }

  const CustomTabPanel = (props: TabPanelProps) =>  {
    const { children, value, index, ...other } = props;
    const { styleName } = props; // Ambil styleName dari props

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ height: 'auto', ...styleName }}> {/* Gunakan spread operator untuk menggabungkan styleName */}
              {children}
            </Box>
          )}
        </div>
    );
}

    
    const a11yProps = (index: number) =>{
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
    export const ModuleRequest=()=> {
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

      return (
        <Box sx={{ width: '100%', backgroundColor: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',height:'auto',marginTop:'20px'}}>
          <Box sx={{ boxShadow: '0px 20px 200px rgba(0, 0, 0, 0.1)',overflow: 'hidden' }}>
            <Tabs textColor="secondary"  value={value} onChange={handleChange} sx={{paddingX:'50px'}} aria-label="basic tabs example">
              <Tab label="Permintaan" {...a11yProps(0)} />
              <Tab label="Proses" {...a11yProps(1)} />
              <Tab label="Hasil" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel styleName={{ display: 'flex', flexDirection: 'column',paddingX:'10px' , }} value={value} index={0}>
          < RequestAI/>
          <div className='flex w-full justify-center items-center h-auto my-20'>
            <button className='w-[27%] h-[40px] rounded-md text-white font-bold bg-[#4AC1A2]'>
            Pilih Fitur
            </button>
          </div>
          </CustomTabPanel>
          <CustomTabPanel styleName={{ display: 'flex', flexDirection: 'column',paddingX:'50px' , }} value={value} index={1}>
          <Process/>
            
          </CustomTabPanel>
          <CustomTabPanel styleName={{ display: 'flex', flexDirection: 'column',paddingX:'10px' , }} value={value} index={2}>
          <Result/>
          </CustomTabPanel>

          
        </Box>
      );
    }


