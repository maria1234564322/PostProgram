import React, { useState } from 'react';
import './AdminLayout.css';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
