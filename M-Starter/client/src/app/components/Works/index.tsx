'use client';
import React, { useState } from 'react';

interface WorkExamplesProps {
  imageSrc: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  imagePosition?: 'left' | 'right';
}

const WorkExamples: React.FC<WorkExamplesProps> = ({
  imageSrc,
  title,
  text1,
  text2,
  text3,
  imagePosition = 'left',
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center', // выравнивание по центру по вертикали
    justifyContent: 'flex-start',
    gap: '16px',
    maxWidth: '74vw',
    marginTop: '30px',
  };

  const imageWrapperStyle: React.CSSProperties = {
    position: 'relative',
    width: '35.625vw',
    height: 'auto',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    transition: 'all 0.3s ease',
    display: 'block',
    cursor: 'pointer',
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    cursor: 'pointer',
  };

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '120%',
    letterSpacing: '0px',
    color: '#D1D5DB',
  };

  const textStyle: React.CSSProperties = {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '130%',
    letterSpacing: '0px',
    marginTop: '10px',
    maxWidth: '28.125vw',
  };

  // Блок с текстовыми параграфами выравниваем по центру относительно изображения
  const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '39vw',
    marginLeft: imagePosition === 'left' ? '60px' : '0px',
    marginRight: imagePosition === 'right' ? '60px' : '0px',
  };

  const modalImageStyle: React.CSSProperties = {
    maxWidth: '90%',
    maxHeight: '90%',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={imageWrapperStyle}>
          <img
            src={imageSrc}
            alt="Preview"
            style={imageStyle}
            onClick={handleZoom}
          />
          <img
            src="/icons/point.svg"
            alt="Zoom icon"
            style={iconStyle}
            onClick={handleZoom}
          />
        </div>

        <div style={textContainerStyle}>
          <p style={titleStyle}>{title}</p>
          <p style={textStyle}>{text1}</p>
          <p style={textStyle}>{text2}</p>
          <p style={textStyle}>{text3}</p>
        </div>
      </div>

      {isZoomed && (
        <div style={modalOverlayStyle} onClick={handleZoom}>
          <img src={imageSrc} alt="Zoomed preview" style={modalImageStyle} />
        </div>
      )}
    </>
  );
};

export default WorkExamples;
