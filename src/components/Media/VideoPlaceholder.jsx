import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PlayIconImg from '../../assets/playIcon.png';
import AflOnlinePlaceholderVideoImg from '../../assets/aflOnlinePlaceholderVideoImg.jpg';
import { TEXT } from '../../utility/constants';

const AbsoluteWrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const RelativeWrapperDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImg = styled.img`
  width: 100%;
`;

const PlayArrowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default function VideoPlaceholder({ handlePlayClick }) {
  const {
    VIDEO_PLACEHOLDER: {
      AFL_ONLINE_SCREENSHOT_ALT,
      PLAY_ICON_ALT,
    },
  } = TEXT;

  return (
    <AbsoluteWrapperDiv>
      <RelativeWrapperDiv>
        <PlaceholderImg
          src={AflOnlinePlaceholderVideoImg}
          alt={AFL_ONLINE_SCREENSHOT_ALT}
        />
        <PlayArrowDiv
          onClick={handlePlayClick}
        >
          <img src={PlayIconImg} alt={PLAY_ICON_ALT} />
        </PlayArrowDiv>
      </RelativeWrapperDiv>
    </AbsoluteWrapperDiv>
  );
}

VideoPlaceholder.propTypes = {
  handlePlayClick: PropTypes.func.isRequired,
};
