import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_CARDS = [
  {
    id: 'card-1',
    title: 'Rosepine Hotel',
    category: 'Booking Website',
    tech: 'UI/UX · Figma',
    link: '/projects/rosepine',
    image: '/assets/projects/rosepine.png',
    defaultX: -130,
    defaultY: -90,
    rotate: 8,
  },
  {
    id: 'card-2',
    title: 'Technovation Society',
    category: 'Organization Website',
    tech: 'UI/UX · Figma',
    link: '/projects/ust-technovation-society',
    image: '/assets/projects/techsoc.png',
    defaultX: 130,
    defaultY: 80,
    rotate: 12,
  },
  {
    id: 'card-3',
    title: 'ML Thesis',
    category: 'Predictive Modeling',
    tech: 'Python · Scikit-learn · Pandas',
    link: '/projects/panic-attack-detection',
    image: '/assets/projects/thesis1.png',
    defaultX: -30,
    defaultY: 230,
    rotate: -4,
  },
];

const MOBILE_POSITIONS = {
  'card-1': { x: 4, y: 0, rotate: -6 },
  'card-2': { x: 142, y: 60, rotate: 7 },
  'card-3': { x: 66, y: 140, rotate: -3 },
};

export function HeroSignature3D() {
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [topZ, setTopZ] = useState(10);
  const [isMobile, setIsMobile] = useState(false);
  const dragInfo = useRef({ id: null, startX: 0, startY: 0, initX: 0, initY: 0 });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 48rem)');
    const syncViewport = () => setIsMobile(media.matches);

    syncViewport();
    media.addEventListener('change', syncViewport);
    return () => media.removeEventListener('change', syncViewport);
  }, []);

  const handlePointerDown = (id, e) => {
    const newZ = topZ + 1;
    setTopZ(newZ);

    if (isMobile) {
      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, zIndex: newZ, isDragging: false } : c))
      );
      return;
    }

    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, zIndex: newZ, isDragging: true } : c))
    );

    const clientX = e.clientX;
    const clientY = e.clientY;
    const currentCard = cards.find((c) => c.id === id);

    dragInfo.current = {
      id,
      startX: clientX,
      startY: clientY,
      initX: currentCard.x ?? currentCard.defaultX,
      initY: currentCard.y ?? currentCard.defaultY,
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerMove = (e) => {
    const { id, startX, startY, initX, initY } = dragInfo.current;
    if (!id) return;

    const clientX = e.clientX;
    const clientY = e.clientY;
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    setCards((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, x: initX + deltaX, y: initY + deltaY } : c
      )
    );
  };

  const handlePointerUp = () => {
    const { id } = dragInfo.current;
    if (id) {
      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isDragging: false } : c))
      );
    }

    dragInfo.current.id = null;
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  return (
    <div className="hero-scatter-area" aria-label="Interactive project preview cards">
      {cards.map((card) => {
        const mobilePosition = MOBILE_POSITIONS[card.id];
        const posX = isMobile ? mobilePosition.x : (card.x ?? card.defaultX);
        const posY = isMobile ? mobilePosition.y : (card.y ?? card.defaultY);
        const rotate = isMobile ? mobilePosition.rotate : card.rotate;

        return (
          <div
            key={card.id}
            className={`hero-scatter-card ${card.isDragging ? 'is-dragging' : ''}`}
            style={{
              transform: `translate3d(${posX}px, ${posY}px, 0px) rotate(${rotate}deg)`,
              zIndex: card.zIndex ?? 1,
            }}
            onPointerDown={(e) => handlePointerDown(card.id, e)}
          >
            <div className="hero-scatter-card__inner">
              <div className="hero-scatter-card__header">
                <div className="hero-scatter-card__dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <span className="hero-scatter-card__tag">{card.category}</span>
              </div>

              <div className="hero-scatter-card__body">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}

                <div className="hero-scatter-card__fallback">
                  <div className="hero-scatter-card__logo-mark">⌘</div>
                  <strong className="hero-scatter-card__title">{card.title}</strong>
                  <span className="hero-scatter-card__meta">{card.tech}</span>
                </div>
              </div>

              <div className="hero-scatter-card__footer">
                <Link to={card.link} className="hero-scatter-card__btn" draggable={false}>
                  <span>{card.title}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
