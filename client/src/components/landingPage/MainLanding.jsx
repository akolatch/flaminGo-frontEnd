import React from 'react';
import FrontDeskLanding from '../frontDesk/FrontDeskLanding';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import HMLanding from '../maintenance/HMLanding';
import ManagementLanding from '../management/ManagementLanding';
import FlexCenterContainer from './FlexCenterContainer';
import TimeSheet from '../GlobalComponents/timeSheet/TimeSheetContainer';

const MainLanding = () => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    management: false,
    hm: false,
    frontDesk: false,
    timeSheet: false,
    landing: true,
  });

  // static object of this Landing routs and flipping for conditional rendering
  const routs = [
    {
      title: 'Front Desk',
      onClick: () => setPaths('frontDesk'),
    },
    { title: 'Housekeeping / Maintenance', onClick: () => setPaths('hm') },
    {
      title: 'Management',
      onClick: () => {
        setPaths('management');
      },
    },
    { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
  ];

  const clickBack = () => setPaths('landing');

  return (
    <div>
      {paths.frontDesk ? (
        <FrontDeskLanding back={clickBack} />
      ) : paths.hm ? (
        <HMLanding back={clickBack} />
      ) : paths.management ? (
        <ManagementLanding back={clickBack} />
      ) : paths.timeSheet ? (
        <TimeSheet back={clickBack} />
      ) : (
        <FlexCenterContainer>
          <LandingButtons routs={routs} />
        </FlexCenterContainer>
      )}
    </div>
  );
};

export default MainLanding;
