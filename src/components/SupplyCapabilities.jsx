import React from 'react';
import './SupplyCapabilities.css';
import commonApp from '../assets/SupplyCapabilities.png';
import customPkg from '../assets/CustomPackagingSolutions.png';
import distributorSupply from '../assets/Distributor-FriendlySupplyModels.png';
import oemPartner from '../assets/OEMManufacturingPartnerships.png';
import internationalLogistics from '../assets/ReliableInternationalLogistics.png';
import scalableProduction from '../assets/ScalableProductionCapacity.png';
import useScrollReveal from '../hooks/useScrollReveal';

const SupplyCapabilities = () => {
  const [ref, isVisible] = useScrollReveal();
  const capabilities = [
    {
      title: "Supply Capabilities",
      desc: "we support our global partners with reliable manufacturing and efficient supply solutions.",
      icon: commonApp
    },
    {
      title: "Scalable Production Capacity",
      desc: "Our Advanced Manufacturing Facilities Allow Us To Increase Production Quickly To Meet Growing Market Demand While Maintaining Consistent Quality.",
      icon: scalableProduction
    },
    {
      title: "Reliable International Logistics",
      desc: "we ensure timely and secure delivery through trusted global shipping and logistics partners.",
      icon: internationalLogistics
    },
    {
      title: "Distributor-Friendly Supply Models",
      desc: "flexible supply programs support distributors and bulk buyers with consistent inventory and long-term supply reliability.",
      icon: distributorSupply
    },
    {
      title: "Custom Packaging Solutions",
      desc: "we offer customized packaging, private labeling, and branding options to meet different market needs.",
      icon: customPkg
    },
    {
      title: "OEM Manufacturing Partnerships",
      desc: "our oem services enable partners to market high-quality gloves under their own brand with full manufacturing and packaging support.",
      icon: oemPartner
    }
  ];

  return (
    <section ref={ref} className={`supply-capabilities-section ${isVisible ? 'in-view' : ''}`}>
      <div className="supply-capabilities-inner">
        <div className="capabilities-header">
          <h1 className="capabilities-main-heading">SUPPLY CAPABILITIES</h1>
          <p className="capabilities-subheading">we support global partners with</p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((item, index) => (
            <div key={index} className="capability-card">
              <img src={item.icon} className="capability-icon" alt={item.title} />
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyCapabilities;
