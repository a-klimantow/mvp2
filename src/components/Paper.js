import React from 'react'

export const Paper = ({ children, styles }) => (
  <div style={{
    background: "#FFFFFF",
    boxShadow: "0px 4px 8px rgba(205, 205, 205, 0.16)",
    borderRadius: 2,
    padding: "16px 24px",
    ...styles
  }}>
    {children}
  </div>
)