import './business-with-dock-opened.css';
import React from 'react'
import business from '../../images/Business.png'; 
import TreeButton from '../../shared/tree-button/tree';
import MedicalInfoButton from '../../shared/medical-info-button/medical-info-button';
import BusinessWithDockOpened from '../../shared/business-dock/business-with-dock-opened/business-with-dock-opened';

// So you would add an onclick event where the router would take you to the route specified. 

function Business() {
    return (
        <div>
        <img className="business" src={ business } alt="text" />
        <BusinessWithDockOpened></BusinessWithDockOpened>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        </div>
    );
  }
  
  export default Business;