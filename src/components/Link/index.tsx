import React, { forwardRef, useMemo } from 'react';
import { Link as ReactLink } from 'react-router-dom';

interface CustomLinkProps {
  to?: string;
  children: React.ReactNode;
  sx?: any;
  state?: any;
  onClick?: () => void;
}

const linkStyle = {
  textDecoration: 'none',
  color: '#551a8b'
};

const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.color = '#FF7D55'; // Truy cập style thông qua currentTarget
};

const handleMouseLeave = (
  e: React.MouseEvent<HTMLAnchorElement>,
  defaultColor
) => {
  e.currentTarget.style.color = defaultColor || '#551a8b'; // Truy cập style thông qua currentTarget
};

const Link = forwardRef<HTMLButtonElement, CustomLinkProps>((props, ref) => {
  const { to, children, sx } = props;

  return (
    <ReactLink
      {...props}
      to={to}
      style={{ ...linkStyle, ...sx }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(e) => handleMouseLeave(e, sx?.color)}
    >
      {children}
    </ReactLink>
  );
});

export default Link;
