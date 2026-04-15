import React from 'react';
import './SpaceAgency.css';

function SpaceAgency() {
  return (
    <section className="space-agency">
      <h1 className="space-agency-title">Космическое агентство</h1>
      <p className="space-agency-description">
        Национальное управление по аэронавтике и исследованию космического
        пространства — ведомство, относящееся к федеральному правительству
        США и подчиняющееся непосредственно президенту США.
      </p>

      <div className="space-agency-content">
        <div className="space-agency-image">
          <img src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop" alt="Земля из космоса" />
        </div>

        <div className="space-agency-features">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <p>Спейс шаттлы — пилотируемые корабли</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔭</div>
            <p>Лучшее телескопическое оборудование</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌙</div>
            <p>Исследовательские станции на Луне — шаг к новым открытиям!</p>
          </div>
            <div className="feature">
            <div className="feature-icon">🌙</div>
            <p>Исследовательские станции на Луне — шаг к новым открытиям!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceAgency;
