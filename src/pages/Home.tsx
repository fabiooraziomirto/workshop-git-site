import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';


const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="content">
      <div className="card">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <p className="event-info">{t.event}</p>
        <p className="organization">{t.organization}</p>
        
        <div className="welcome-section">
          <h2>Benvenuto al Workshop Git! 🚀</h2>
          <p>
            Questo workshop ti guiderà attraverso i concetti fondamentali di Git e GitHub, 
            insegnandoti come collaborare efficacemente nel mondo open source.
          </p>
        </div>

        <div className="workshop-overview">
          <h2>Panoramica del Workshop</h2>
          <div className="lab-cards">
            <div className="lab-card">
              <h3>📚 Introduzione</h3>
              <p>Prerequisiti e configurazione iniziale di Git</p>
              <Link to="/intro" className="btn btn-primary">Inizia qui</Link>
            </div>
            
            <div className="lab-card">
              <h3>🔧 Lab 1: Stage e Commit</h3>
              <p>Impara i concetti base: staging area, commit e gestione locale</p>
              <Link to="/lab1" className="btn btn-secondary">Vai al Lab 1</Link>
            </div>
            
            <div className="lab-card">
              <h3>🌐 Lab 2: Repository Remoti</h3>
              <p>Lavora con GitHub: SSH, HTTPS, push e pull</p>
              <Link to="/lab2" className="btn btn-secondary">Vai al Lab 2</Link>
            </div>
            
            <div className="lab-card">
              <h3>🤝 Lab 3: Fork e Pull Request</h3>
              <p>Flusso open source: fork, contributi e collaborazione</p>
              <Link to="/lab3" className="btn btn-secondary">Vai al Lab 3</Link>
            </div>
          </div>
        </div>

        <div className="quick-start">
          <h2>Quick Start</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Configura Git</h4>
                <p>Imposta nome e email per i tuoi commit</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Segui i Lab</h4>
                <p>Completa gli esercizi in sequenza</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Contribuisci</h4>
                <p>Partecipa al progetto open source</p>
              </div>
            </div>
          </div>
        </div>

        <div className="resources-preview">
          <h2>Risorse Utili</h2>
          <p>Trova documentazione, cheat sheet e strumenti di apprendimento</p>
          <Link to="/resources" className="btn btn-outline">Vedi tutte le risorse</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
