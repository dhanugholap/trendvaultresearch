CREATE DATABASE IF NOT EXISTS market_research;
USE market_research;

CREATE TABLE IF NOT EXISTS industries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) NOT NULL UNIQUE,
  industry_slug VARCHAR(255),
  description TEXT,
  pages INT DEFAULT 0,
  base_year INT,
  forecast_year INT,
  price DECIMAL(10,2) DEFAULT 0,
  is_new BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (industry_slug) REFERENCES industries(slug) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed industries
INSERT IGNORE INTO industries (name, slug, description, icon) VALUES
('Healthcare', 'healthcare', 'Healthcare sector reports and analysis.', '🏥'),
('Chemicals & Materials', 'chemicals-and-materials', 'Chemicals and materials industry insights.', '⚗️'),
('Information & Technology', 'information-and-technology', 'IT sector market research.', '💻'),
('Machinery & Equipment', 'machinery-and-equipment', 'Machinery and equipment industry reports.', '⚙️'),
('Automotive & Transportation', 'automotive-and-transportation', 'Automotive market intelligence.', '🚗'),
('Food & Beverages', 'food-and-beverages', 'Food and beverage sector analysis.', '🍔'),
('Agriculture', 'agriculture', 'Agriculture industry research.', '🌾'),
('Consumer Goods', 'consumer-goods', 'Consumer goods market reports.', '🛍️'),
('Semiconductor & Electronics', 'semiconductor-and-electronics', 'Semiconductor market insights.', '🔌'),
('Packaging', 'packaging', 'Packaging industry analysis.', '📦');

-- Seed 20 Healthcare reports
INSERT IGNORE INTO reports (title, slug, industry_slug, description, pages, base_year, forecast_year, price, is_new) VALUES
('Vaccine Market - 2025-2033 Trends: Unveiling Growth Opportunities and Competitor Dynamics', 'vaccine-market-2025-2033', 'healthcare', 'Comprehensive vaccine market analysis covering growth trends and competitor dynamics from 2025 to 2033.', 180, 2024, 2033, 4500.00, TRUE),
('Global Oncology Drugs Market Size, Share & Forecast 2025-2033', 'global-oncology-drugs-market', 'healthcare', 'In-depth analysis of the global oncology drugs market with forecasts through 2033.', 175, 2024, 2033, 4800.00, TRUE),
('Medical Devices Market - Growth, Trends and Forecast 2025-2033', 'medical-devices-market-2025', 'healthcare', 'Comprehensive study of the global medical devices market including key drivers and restraints.', 190, 2024, 2033, 5200.00, TRUE),
('Global Telemedicine Market Analysis and Forecast 2025-2033', 'global-telemedicine-market', 'healthcare', 'Telemedicine market research covering digital health platforms, growth opportunities and competitive landscape.', 165, 2024, 2033, 4200.00, TRUE),
('Pharmaceutical Drug Delivery Systems Market 2025-2033', 'pharma-drug-delivery-systems', 'healthcare', 'Analysis of drug delivery systems including oral, injectable, transdermal and inhalation segments.', 170, 2024, 2033, 4600.00, TRUE),
('Global Biotechnology Market Size and Forecast 2025-2033', 'global-biotechnology-market', 'healthcare', 'Biotechnology market covering biopharmaceuticals, genomics, agricultural biotech and industrial biotech.', 185, 2024, 2033, 5000.00, TRUE),
('Mental Health Software Market - Trends and Forecast 2025-2033', 'mental-health-software-market', 'healthcare', 'Mental health software market analysis including telepsychiatry, EHR and patient engagement platforms.', 155, 2024, 2033, 3900.00, TRUE),
('Global Hospital Management Software Market 2025-2033', 'hospital-management-software-market', 'healthcare', 'Hospital management software market covering clinical, administrative and financial management systems.', 160, 2024, 2033, 4100.00, TRUE),
('Orthopedic Implants Market Size, Share & Forecast 2025-2033', 'orthopedic-implants-market', 'healthcare', 'Orthopedic implants market analysis covering joint reconstruction, spinal implants and trauma fixation.', 172, 2024, 2033, 4700.00, TRUE),
('Global Diagnostics Market - Growth Opportunities 2025-2033', 'global-diagnostics-market', 'healthcare', 'Diagnostics market research covering in-vitro diagnostics, imaging and point-of-care testing.', 168, 2024, 2033, 4400.00, TRUE),
('Wearable Medical Devices Market Analysis 2025-2033', 'wearable-medical-devices-market', 'healthcare', 'Wearable medical devices market covering fitness trackers, smartwatches and remote patient monitoring.', 158, 2024, 2033, 4300.00, TRUE),
('Global Stem Cell Therapy Market Forecast 2025-2033', 'stem-cell-therapy-market', 'healthcare', 'Stem cell therapy market analysis covering autologous, allogeneic and xenogeneic therapies.', 162, 2024, 2033, 4900.00, TRUE),
('Healthcare IT Market - Trends, Growth and Forecast 2025-2033', 'healthcare-it-market', 'healthcare', 'Healthcare IT market covering EHR, health information exchange, telehealth and cybersecurity.', 178, 2024, 2033, 4650.00, TRUE),
('Global Surgical Robots Market Size and Forecast 2025-2033', 'surgical-robots-market', 'healthcare', 'Surgical robots market analysis covering laparoscopic, orthopedic and neurosurgical robotic systems.', 182, 2024, 2033, 5100.00, TRUE),
('Personalized Medicine Market - Growth Analysis 2025-2033', 'personalized-medicine-market', 'healthcare', 'Personalized medicine market covering genomics, proteomics, pharmacogenomics and companion diagnostics.', 174, 2024, 2033, 4850.00, TRUE),
('Global Blood Glucose Monitoring Market 2025-2033', 'blood-glucose-monitoring-market', 'healthcare', 'Blood glucose monitoring market covering self-monitoring devices, continuous glucose monitors and data management.', 150, 2024, 2033, 3800.00, TRUE),
('Ophthalmology Devices Market Analysis and Forecast 2025-2033', 'ophthalmology-devices-market', 'healthcare', 'Ophthalmology devices market covering surgical equipment, diagnostic devices and vision care products.', 163, 2024, 2033, 4250.00, TRUE),
('Global Dental Equipment Market Size and Forecast 2025-2033', 'dental-equipment-market', 'healthcare', 'Dental equipment market covering imaging systems, dental chairs, CAD/CAM systems and sterilization equipment.', 156, 2024, 2033, 4050.00, TRUE),
('Rehabilitation Equipment Market - Trends 2025-2033', 'rehabilitation-equipment-market', 'healthcare', 'Rehabilitation equipment market covering physical therapy, occupational therapy and assistive technology.', 148, 2024, 2033, 3750.00, TRUE),
('Global Home Healthcare Market Size and Forecast 2025-2033', 'home-healthcare-market', 'healthcare', 'Home healthcare market covering home medical equipment, home health services and telehealth solutions.', 169, 2024, 2033, 4350.00, TRUE);
