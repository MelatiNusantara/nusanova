---
title: Home
date: 2025-08-13 23:54:00 Z
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nusanova - Connected Finance Ecosystems</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --pacific-blue: #1B365D;
            --sustainable-teal: #2D7D7D;
            --coral-innovation: #FF6B47;
            --pearl-white: #F8F9FA;
            --pearl-light: #FFFFFF;
            --text-secondary: #666;
            --border-light: #E8F4F8;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: var(--pacific-blue);
            background: var(--pearl-white);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .container-wide {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        .header {
            background: var(--pearl-light);
            box-shadow: 0 2px 20px rgba(27, 54, 93, 0.08);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            backdrop-filter: blur(10px);
        }
        
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }
        
        .island-logo {
            display: flex;
            gap: 4px;
            align-items: center;
        }
        
        .island {
            border-radius: 50% 30% 60% 40%;
            animation: gentleFloat 4s ease-in-out infinite;
        }
        
        .island-1 {
            width: 12px;
            height: 12px;
            background: var(--pacific-blue);
            animation-delay: 0s;
        }
        
        .island-2 {
            width: 10px;
            height: 10px;
            background: var(--sustainable-teal);
            animation-delay: 0.8s;
        }
        
        .island-3 {
            width: 8px;
            height: 8px;
            background: var(--coral-innovation);
            animation-delay: 1.6s;
        }
        
        @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            33% { transform: translateY(-2px); }
            66% { transform: translateY(-1px); }
        }
        
        .logo-text {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--pacific-blue);
            letter-spacing: 1px;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 35px;
            align-items: center;
        }
        
        .nav-link {
            text-decoration: none;
            color: var(--sustainable-teal);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.3s ease;
            position: relative;
        }
        
        .nav-link:hover {
            color: var(--coral-innovation);
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--coral-innovation);
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        .cta-button {
            background: linear-gradient(135deg, var(--coral-innovation) 0%, #E64A24 100%);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 107, 71, 0.3);
        }
        
        /* Mobile Menu */
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
        }
        
        .mobile-menu-toggle span {
            display: block;
            width: 25px;
            height: 3px;
            background: var(--pacific-blue);
            margin: 4px 0;
            border-radius: 2px;
            transition: 0.3s;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--pearl-white) 0%, var(--border-light) 100%);
            padding: 140px 0 100px;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 20%;
            right: -10%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(45, 125, 125, 0.1) 0%, transparent 70%);
            border-radius: 50% 30% 60% 40%;
            animation: heroFloat 8s ease-in-out infinite;
        }
        
        .hero::after {
            content: '';
            position: absolute;
            bottom: 30%;
            left: -5%;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255, 107, 71, 0.08) 0%, transparent 70%);
            border-radius: 50% 30% 60% 40%;
            animation: heroFloat 10s ease-in-out infinite reverse;
        }
        
        @keyframes heroFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .hero-title {
            font-size: 3.5rem;
            font-weight: 200;
            color: var(--pacific-blue);
            margin-bottom: 25px;
            letter-spacing: 2px;
            line-height: 1.2;
        }
        
        .hero-subtitle {
            font-size: 1.3rem;
            color: var(--sustainable-teal);
            margin-bottom: 40px;
            font-weight: 300;
            line-height: 1.5;
        }
        
        .hero-description {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 50px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .hero-cta {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .cta-secondary {
            background: transparent;
            color: var(--sustainable-teal);
            border: 2px solid var(--sustainable-teal);
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .cta-secondary:hover {
            background: var(--sustainable-teal);
            color: white;
            transform: translateY(-2px);
        }
        
        /* Services Section */
        .services {
            padding: 100px 0;
            background: var(--pearl-light);
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 200;
            color: var(--pacific-blue);
            margin-bottom: 20px;
            letter-spacing: 1px;
        }
        
        .section-subtitle {
            font-size: 1.2rem;
            color: var(--sustainable-teal);
            font-weight: 300;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
        }
        
        .service-card {
            background: var(--pearl-light);
            padding: 40px 30px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(27, 54, 93, 0.08);
            transition: all 0.3s ease;
            border: 1px solid var(--border-light);
            position: relative;
            overflow: hidden;
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--sustainable-teal), var(--coral-innovation));
        }
        
        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(27, 54, 93, 0.15);
        }
        
        .service-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 25px;
            position: relative;
        }
        
        .service-icon .island {
            position: absolute;
        }
        
        .bond-icon .island-1 { top: 5px; left: 5px; }
        .bond-icon .island-2 { top: 15px; left: 25px; }
        .bond-icon .island-3 { top: 25px; left: 10px; }
        
        .esg-icon .island-1 { top: 10px; left: 15px; }
        .esg-icon .island-2 { top: 5px; left: 30px; }
        .esg-icon .island-3 { top: 25px; left: 20px; }
        
        .climate-icon .island-1 { top: 8px; left: 8px; }
        .climate-icon .island-2 { top: 20px; left: 25px; }
        .climate-icon .island-3 { top: 30px; left: 5px; }
        
        .digital-icon .island-1 { top: 12px; left: 12px; }
        .digital-icon .island-2 { top: 8px; left: 28px; }
        .digital-icon .island-3 { top: 28px; left: 20px; }
        
        .service-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--pacific-blue);
            margin-bottom: 15px;
        }
        
        .service-description {
            color: var(--text-secondary);
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .service-features {
            list-style: none;
        }
        
        .service-features li {
            color: var(--sustainable-teal);
            margin-bottom: 8px;
            position: relative;
            padding-left: 20px;
            font-size: 0.9rem;
        }
        
        .service-features li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--coral-innovation);
            font-weight: 600;
        }
        
        /* Approach Section */
        .approach {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--pacific-blue) 0%, var(--sustainable-teal) 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .approach::before {
            content: '';
            position: absolute;
            top: 10%;
            left: 5%;
            width: 100px;
            height: 100px;
            background: rgba(255, 107, 71, 0.1);
            border-radius: 50% 30% 60% 40%;
            animation: approachFloat 12s ease-in-out infinite;
        }
        
        .approach::after {
            content: '';
            position: absolute;
            bottom: 15%;
            right: 10%;
            width: 80px;
            height: 80px;
            background: rgba(248, 249, 250, 0.08);
            border-radius: 50% 30% 60% 40%;
            animation: approachFloat 15s ease-in-out infinite reverse;
        }
        
        @keyframes approachFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(3deg); }
            66% { transform: translateY(-5px) rotate(-2deg); }
        }
        
        .approach-content {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }
        
        .approach-text {
            max-width: 500px;
        }
        
        .approach-title {
            font-size: 2.8rem;
            font-weight: 200;
            margin-bottom: 30px;
            letter-spacing: 1px;
            line-height: 1.2;
        }
        
        .approach-description {
            font-size: 1.1rem;
            margin-bottom: 40px;
            opacity: 0.9;
            line-height: 1.6;
        }
        
        .approach-principles {
            display: grid;
            gap: 20px;
        }
        
        .principle {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }
        
        .principle-icon {
            width: 8px;
            height: 8px;
            background: var(--coral-innovation);
            border-radius: 50% 30% 60% 40%;
            margin-top: 8px;
            flex-shrink: 0;
        }
        
        .principle-text {
            font-size: 1rem;
            opacity: 0.9;
        }
        
        .approach-visual {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .ecosystem-diagram {
            position: relative;
            width: 300px;
            height: 300px;
        }
        
        .ecosystem-island {
            position: absolute;
            border-radius: 50% 30% 60% 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 0.8rem;
            text-align: center;
            line-height: 1.2;
            animation: ecosystemFloat 6s ease-in-out infinite;
        }
        
        .ecosystem-island.central {
            width: 100px;
            height: 100px;
            background: var(--coral-innovation);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 0.9rem;
            animation-delay: 0s;
        }
        
        .ecosystem-island.bond {
            width: 70px;
            height: 70px;
            background: rgba(248, 249, 250, 0.2);
            top: 20%;
            left: 60%;
            animation-delay: 1s;
        }
        
        .ecosystem-island.esg {
            width: 60px;
            height: 60px;
            background: rgba(248, 249, 250, 0.15);
            top: 60%;
            left: 80%;
            animation-delay: 2s;
        }
        
        .ecosystem-island.climate {
            width: 65px;
            height: 65px;
            background: rgba(248, 249, 250, 0.18);
            bottom: 20%;
            left: 50%;
            animation-delay: 3s;
        }
        
        .ecosystem-island.digital {
            width: 55px;
            height: 55px;
            background: rgba(248, 249, 250, 0.12);
            top: 40%;
            left: 15%;
            animation-delay: 4s;
        }
        
        @keyframes ecosystemFloat {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        

        
        /* About Section */
        .about {
            padding: 100px 0;
            background: var(--pearl-light);
        }
        
        .about-content {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .about-intro {
            text-align: center;
            margin-bottom: 80px;
        }
        
        .about-lead {
            font-size: 1.3rem;
            color: var(--pacific-blue);
            font-weight: 300;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .expertise-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            margin-bottom: 80px;
        }
        
        .expertise-area {
            text-align: center;
            padding: 30px 20px;
        }
        
        .expertise-icon {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        
        .expertise-icon .island {
            border-radius: 50% 30% 60% 40%;
            animation: gentleFloat 4s ease-in-out infinite;
        }
        
        .expertise-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--pacific-blue);
            margin-bottom: 15px;
        }
        
        .expertise-description {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 1rem;
        }
        
        .about-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 50px;
            margin-bottom: 80px;
        }
        
        .detail-section {
            padding: 30px;
            background: var(--pearl-white);
            border-radius: 15px;
            border-left: 4px solid var(--sustainable-teal);
        }
        
        .detail-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--pacific-blue);
            margin-bottom: 15px;
        }
        
        .detail-text {
            color: var(--text-secondary);
            line-height: 1.6;
        }
        
        .leadership-highlight {
            background: linear-gradient(135deg, var(--sustainable-teal) 0%, var(--pacific-blue) 100%);
            border-radius: 20px;
            padding: 50px 40px;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .leadership-highlight::before {
            content: '';
            position: absolute;
            top: 15%;
            right: 5%;
            width: 60px;
            height: 60px;
            background: rgba(255, 107, 71, 0.1);
            border-radius: 50% 30% 60% 40%;
            animation: highlightFloat 10s ease-in-out infinite;
        }
        
        @keyframes highlightFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(8deg); }
        }
        
        .highlight-content {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
            align-items: center;
        }
        
        .highlight-text h3 {
            font-size: 1.8rem;
            font-weight: 300;
            margin-bottom: 20px;
            letter-spacing: 1px;
        }
        
        .highlight-text p {
            font-size: 1.1rem;
            opacity: 0.9;
            line-height: 1.6;
        }
        
        .floating-islands-about {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
        
        .about-island {
            width: 20px;
            height: 20px;
            border-radius: 50% 30% 60% 40%;
            animation: aboutIslandFloat 3s ease-in-out infinite;
            opacity: 0.8;
        }
        
        @keyframes aboutIslandFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }

        /* CTA Section */
        .cta-section {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--border-light) 0%, var(--pearl-light) 100%);
            text-align: center;
        }
        
        .cta-content {
            max-width: 700px;
            margin: 0 auto;
        }
        
        .cta-title {
            font-size: 2.5rem;
            font-weight: 200;
            color: var(--pacific-blue);
            margin-bottom: 25px;
            letter-spacing: 1px;
        }
        
        .cta-description {
            font-size: 1.2rem;
            color: var(--sustainable-teal);
            margin-bottom: 40px;
            font-weight: 300;
        }
        
        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        /* Footer */
        .footer {
            background: var(--pacific-blue);
            color: white;
            padding: 60px 0 30px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 40px;
        }
        
        .footer-brand {
            max-width: 300px;
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        
        .footer-logo .logo-text {
            color: white;
        }
        
        .footer-description {
            opacity: 0.8;
            line-height: 1.6;
            margin-bottom: 25px;
        }
        
        .footer-section h4 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: var(--coral-innovation);
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        .footer-links a:hover {
            opacity: 1;
            color: var(--coral-innovation);
        }
        
        .footer-contact p {
            margin-bottom: 10px;
            opacity: 0.8;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 30px;
            text-align: center;
            opacity: 0.7;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block;
            }
            
            .nav-menu {
                display: none;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.1rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .approach-content {
                grid-template-columns: 1fr;
                gap: 50px;
            }
            
            .highlight-content {
                grid-template-columns: 1fr;
                gap: 30px;
                text-align: center;
            }
            
            .about-details {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .approach-title {
                font-size: 2.2rem;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            .hero-cta {
                flex-direction: column;
                align-items: center;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
        
        @media (max-width: 480px) {
            .container, .container-wide {
                padding: 0 15px;
            }
            
            .hero {
                padding: 120px 0 80px;
            }
            
            .hero-title {
                font-size: 2rem;
            }
            
            .services, .approach, .about, .cta-section {
                padding: 60px 0;
            }
            
            .service-card {
                padding: 30px 20px;
            }
            
            .leadership-highlight {
                padding: 30px 20px;
            }
            
            .about-lead {
                font-size: 1.1rem;
            }
            
            .ecosystem-diagram {
                width: 250px;
                height: 250px;
            }
            
            .ecosystem-island.central {
                width: 80px;
                height: 80px;
                font-size: 0.8rem;
            }
            
            .ecosystem-island.bond,
            .ecosystem-island.esg,
            .ecosystem-island.climate,
            .ecosystem-island.digital {
                width: 50px;
                height: 50px;
                font-size: 0.7rem;
            }
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--pearl-white);
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--sustainable-teal);
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: var(--pacific-blue);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav container">
            <a href="#home" class="logo">
                <div class="island-logo">
                    <div class="island island-1"></div>
                    <div class="island island-2"></div>
                    <div class="island island-3"></div>
                </div>
                <span class="logo-text">NUSANOVA</span>
            </a>
            
            <ul class="nav-menu">
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#approach" class="nav-link">Approach</a></li>
                <li><a href="#insights" class="nav-link">Insights</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="cta-button">Connect</a></li>
            </ul>
            
            <button class="mobile-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Connected Finance Ecosystems</h1>
                <p class="hero-subtitle">Bridging traditional expertise with sustainable innovation</p>
                <p class="hero-description">We navigate the interconnected currents of modern finance, creating value through ESG integration, climate solutions, and digital innovation—all grounded in proven investment principles.</p>
                <div class="hero-cta">
                    <a href="#services" class="cta-button">Explore Solutions</a>
                    <a href="#approach" class="cta-secondary">Our Approach</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Service Archipelago</h2>
                <p class="section-subtitle">Four specialized practices, interconnected by shared principles and integrated expertise</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon bond-icon">
                        <div class="island island-1"></div>
                        <div class="island island-2"></div>
                        <div class="island island-3"></div>
                    </div>
                    <h3 class="service-title">Bond Studio</h3>
                    <p class="service-description">Traditional fixed income expertise enhanced with sustainable integration. We navigate credit markets with both analytical rigor and ESG insight.</p>
                    <ul class="service-features">
                        <li>Corporate & sovereign bond analysis</li>
                        <li>ESG-integrated credit research</li>
                        <li>Transition finance strategies</li>
                        <li>Risk-adjusted sustainable returns</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-icon esg-icon">
                        <div class="island island-1"></div>
                        <div class="island island-2"></div>
                        <div class="island island-3"></div>
                    </div>
                    <h3 class="service-title">ESG Advisory</h3>
                    <p class="service-description">Move beyond surface-level ESG scores to understand material sustainability drivers in your specific markets and sectors.</p>
                    <ul class="service-features">
                        <li>ESG integration frameworks</li>
                        <li>Materiality assessment</li>
                        <li>Impact measurement & reporting</li>
                        <li>Regulatory compliance strategy</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-icon climate-icon">
                        <div class="island island-1"></div>
                        <div class="island island-2"></div>
                        <div class="island island-3"></div>
                    </div>
                    <h3 class="service-title">Climate Finance</h3>
                    <p class="service-description">Navigate the evolving landscape of climate-related financial opportunities with strategies that deliver both environmental and financial returns.</p>
                    <ul class="service-features">
                        <li>Green & blue bond strategies</li>
                        <li>Climate risk assessment</li>
                        <li>Carbon market insights</li>
                        <li>Transition pathway planning</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-icon digital-icon">
                        <div class="island island-1"></div>
                        <div class="island island-2"></div>
                        <div class="island island-3"></div>
                    </div>
                    <h3 class="service-title">Digital Finance</h3>
                    <p class="service-description">Harness technology and data analytics to enhance investment decisions and create more efficient, transparent financial solutions.</p>
                    <ul class="service-features">
                        <li>Alternative data integration</li>
                        <li>Digital asset strategies</li>
                        <li>Fintech partnerships</li>
                        <li>Portfolio analytics & reporting</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Approach Section -->
    <section id="approach" class="approach">
        <div class="container">
            <div class="approach-content">
                <div class="approach-text">
                    <h2 class="approach-title">Navigating Interconnected Markets</h2>
                    <p class="approach-description">We view finance as interconnected ecosystems rather than isolated asset classes. Our integrated approach reveals connections others miss, creating value through strategic navigation of market currents.</p>
                    
                    <div class="approach-principles">
                        <div class="principle">
                            <div class="principle-icon"></div>
                            <p class="principle-text"><strong>Connected Analysis:</strong> Everything in finance flows together—ESG factors, market dynamics, and long-term returns move like ocean currents.</p>
                        </div>
                        <div class="principle">
                            <div class="principle-icon"></div>
                            <p class="principle-text"><strong>Quantified Impact:</strong> Sustainable finance delivers measurable value—both financial and environmental—backed by rigorous data analysis.</p>
                        </div>
                        <div class="principle">
                            <div class="principle-icon"></div>
                            <p class="principle-text"><strong>Bridge Building:</strong> We honor proven investment principles while embracing innovative sustainable strategies and technologies.</p>
                        </div>
                    </div>
                </div>
                
                <div class="approach-visual">
                    <div class="ecosystem-diagram">
                        <div class="ecosystem-island central">NUSANOVA</div>
                        <div class="ecosystem-island bond">Bond Studio</div>
                        <div class="ecosystem-island esg">ESG Advisory</div>
                        <div class="ecosystem-island climate">Climate Finance</div>
                        <div class="ecosystem-island digital">Digital Finance</div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Navigators of Global Finance</h2>
                <p class="section-subtitle">A constellation of thought leaders bridging traditional expertise with sustainable innovation across international markets</p>
            </div>
            
            <div class="about-content">
                <div class="about-intro">
                    <p class="about-lead">Our team represents decades of collective experience navigating the world's most sophisticated financial markets. We are architects of sustainable finance frameworks, advisors to central banks, and pioneers who have shaped ESG integration across Asia-Pacific, Europe, and North America.</p>
                </div>
                
                <div class="expertise-grid">
                    <div class="expertise-area">
                        <div class="expertise-icon">
                            <div class="island" style="width: 16px; height: 16px; background: var(--pacific-blue);"></div>
                        </div>
                        <h3 class="expertise-title">Global Markets Leadership</h3>
                        <p class="expertise-description">Former senior executives from leading investment banks, sovereign wealth funds, and multilateral institutions across 15+ countries</p>
                    </div>
                    
                    <div class="expertise-area">
                        <div class="expertise-icon">
                            <div class="island" style="width: 16px; height: 16px; background: var(--sustainable-teal);"></div>
                        </div>
                        <h3 class="expertise-title">Regulatory Architects</h3>
                        <p class="expertise-description">Key contributors to sustainable finance regulations and frameworks with central banks, IOSCO, and regional financial authorities</p>
                    </div>
                    
                    <div class="expertise-area">
                        <div class="expertise-icon">
                            <div class="island" style="width: 16px; height: 16px; background: var(--coral-innovation);"></div>
                        </div>
                        <h3 class="expertise-title">Academic Thought Leaders</h3>
                        <p class="expertise-description">Published researchers and professors from leading business schools, shaping next-generation sustainable finance education</p>
                    </div>
                </div>
                
                <div class="about-details">
                    <div class="detail-section">
                        <h3 class="detail-title">International Expertise</h3>
                        <p class="detail-text">Our team's collective experience spans major financial centers including Singapore, Hong Kong, Tokyo, Sydney, London, New York, and Zurich. We bring deep understanding of cross-border capital flows, regulatory frameworks, and cultural nuances that drive successful sustainable finance implementation across diverse markets.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3 class="detail-title">Thought Leadership</h3>
                        <p class="detail-text">Regular contributors to leading financial publications, keynote speakers at major industry conferences, and advisors to policymakers shaping the future of sustainable finance. Our insights have influenced billions in capital allocation decisions and regulatory frameworks across the Asia-Pacific region.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3 class="detail-title">Connected Ecosystem</h3>
                        <p class="detail-text">Beyond individual expertise, our strength lies in how we connect disparate knowledge areas—traditional fixed income with climate science, quantitative analytics with ESG materiality, regulatory compliance with innovation strategy. This interconnected approach creates unique value for our clients.</p>
                    </div>
                </div>
                
                <div class="leadership-highlight">
                    <div class="highlight-content">
                        <div class="highlight-text">
                            <h3>Shaping Tomorrow's Finance Today</h3>
                            <p>We don't just follow sustainable finance trends—we help create them. Our team has been instrumental in developing green bond standards, ESG integration methodologies, and climate risk frameworks that are now industry benchmarks.</p>
                        </div>
                        <div class="highlight-visual">
                            <div class="floating-islands-about">
                                <div class="about-island" style="background: var(--pacific-blue); animation-delay: 0s;"></div>
                                <div class="about-island" style="background: var(--sustainable-teal); animation-delay: 0.5s;"></div>
                                <div class="about-island" style="background: var(--coral-innovation); animation-delay: 1s;"></div>
                                <div class="about-island" style="background: var(--pacific-blue); animation-delay: 1.5s;"></div>
                                <div class="about-island" style="background: var(--sustainable-teal); animation-delay: 2s;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2 class="cta-title">Chart Your Sustainable Finance Course</h2>
                <p class="cta-description">Ready to explore how connected finance ecosystems can strengthen your investment approach? Let's navigate these opportunities together.</p>
                <div class="cta-buttons">
                    <a href="mailto:sf@nusanova.org" class="cta-button">Start Conversation</a>
                    <a href="#insights" class="cta-secondary">Read Our Insights</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="island-logo">
                            <div class="island island-1"></div>
                            <div class="island island-2"></div>
                            <div class="island island-3"></div>
                        </div>
                        <span class="logo-text">NUSANOVA</span>
                    </div>
                    <p class="footer-description">Connecting traditional financial expertise with sustainable innovation through our archipelago of specialized services.</p>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul class="footer-links">
                        <li><a href="#services">Bond Studio</a></li>
                        <li><a href="#services">ESG Advisory</a></li>
                        <li><a href="#services">Climate Finance</a></li>
                        <li><a href="#services">Digital Finance</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul class="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#approach">Our Approach</a></li>
                        <li><a href="#insights">Insights</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                </div>
                
                <div class="footer-section footer-contact">
                    <h4>Connect</h4>
                    <p>sf@nusanova.org</p>
                    <p style="margin-top: 20px; font-weight: 600; color: var(--coral-innovation);">Jakarta:</p>
                    <p style="font-size: 0.9rem; line-height: 1.4;">Office Ground Floor Unit 2, Apt Simprug Indah, Jl Teuku Nyak Arief No 98, Jakarta Selatan 12220</p>
                    <p style="margin-top: 15px; font-weight: 600; color: var(--coral-innovation);">Surabaya:</p>
                    <p style="font-size: 0.9rem; line-height: 1.4;">Prakarsa Building, lt. 2, Jalan Gubernur Suryo 1B Surabaya 60271, Jawa Timur, Indonesia</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Nusanova. All rights reserved. | Connected Finance Ecosystems</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle (basic implementation)
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(248, 249, 250, 0.95)';
            } else {
                header.style.background = 'var(--pearl-light)';
            }
        });
    </script>
</body>
</html>