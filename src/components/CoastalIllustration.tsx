"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Full-bleed Nature Coast SVG — lighthouse, Gulf water, sunrise, sea oats, soft beam */
export default function CoastalIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="coastal-scene"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunriseSky" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#E8B978" />
            <stop offset="10%" stopColor="#F2C98A" />
            <stop offset="24%" stopColor="#F0D2A8" />
            <stop offset="42%" stopColor="#E6DFC8" />
            <stop offset="60%" stopColor="#D4E8F2" />
            <stop offset="80%" stopColor="#BDDCEB" />
            <stop offset="100%" stopColor="#A5CBDF" />
          </linearGradient>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E0" stopOpacity="1" />
            <stop offset="28%" stopColor="#FFE29A" stopOpacity="0.95" />
            <stop offset="58%" stopColor="#F0C56A" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunBloom" cx="80%" cy="24%" r="42%">
            <stop offset="0%" stopColor="#FFE4A0" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#F0C878" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#E8B868" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="horizonWarmth" cx="74%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#F8D9A0" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#EBC890" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="oceanDeep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#246894" />
            <stop offset="35%" stopColor="#114870" />
            <stop offset="70%" stopColor="#0A355C" />
            <stop offset="100%" stopColor="#051C30" />
          </linearGradient>
          <linearGradient id="oceanMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A8FB8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0B3A66" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="oceanShimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#DCEFF7" stopOpacity="0" />
            <stop offset="35%" stopColor="#FFE9B0" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#FFF3C4" stopOpacity="0.22" />
            <stop offset="80%" stopColor="#DCEFF7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="foamLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8F4F9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sandBank" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6F1E7" />
            <stop offset="55%" stopColor="#EDE4D0" />
            <stop offset="100%" stopColor="#E2D6BC" />
          </linearGradient>
          <linearGradient id="towerBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D8CFBE" />
            <stop offset="28%" stopColor="#F4EFE4" />
            <stop offset="55%" stopColor="#FFFFFF" />
            <stop offset="82%" stopColor="#E8E0D0" />
            <stop offset="100%" stopColor="#C9BFAE" />
          </linearGradient>
          <linearGradient id="towerStripe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E4574" />
            <stop offset="100%" stopColor="#062440" />
          </linearGradient>
          <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFF6D0" stopOpacity="0.78" />
            <stop offset="12%" stopColor="#FFE49A" stopOpacity="0.48" />
            <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.28" />
            <stop offset="65%" stopColor="#FFE9A3" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lanternCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="1" />
            <stop offset="25%" stopColor="#FFE9A8" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="textVeil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.86" />
            <stop offset="22%" stopColor="#FFFFFF" stopOpacity="0.58" />
            <stop offset="42%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="58%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mistBand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6F1E7" stopOpacity="0" />
            <stop offset="40%" stopColor="#E8F0F4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#sunriseSky)" />
        <ellipse cx="1080" cy="210" rx="460" ry="340" fill="url(#sunBloom)" />
        <ellipse cx="1000" cy="420" rx="520" ry="140" fill="url(#horizonWarmth)" />

        <circle cx="1140" cy="205" r="150" fill="url(#sunCore)" opacity="0.5" />
        <circle cx="1140" cy="205" r="72" fill="#FFF0C4" opacity="0.5" />
        <circle cx="1140" cy="205" r="44" fill="#FFE9A8" opacity="0.72" />
        <circle cx="1140" cy="205" r="26" fill="#FFF8E0" opacity="0.92" />

        <motion.g
          animate={{ x: [0, 24, 0] }}
          transition={{ duration: 52, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.42"
        >
          <ellipse cx="210" cy="138" rx="100" ry="26" fill="#FFFFFF" />
          <ellipse cx="268" cy="126" rx="62" ry="20" fill="#FFFFFF" />
          <ellipse cx="160" cy="130" rx="52" ry="16" fill="#FFFFFF" opacity="0.85" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -18, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.32"
        >
          <ellipse cx="600" cy="96" rx="78" ry="20" fill="#FFFFFF" />
          <ellipse cx="648" cy="88" rx="46" ry="14" fill="#FFFFFF" />
        </motion.g>
        <motion.g
          animate={{ x: [0, 16, 0] }}
          transition={{ duration: 68, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.28"
        >
          <ellipse cx="940" cy="155" rx="86" ry="22" fill="#FFFFFF" />
          <ellipse cx="995" cy="146" rx="52" ry="16" fill="#FFFFFF" />
        </motion.g>

        <rect y="400" width="1440" height="100" fill="url(#mistBand)" />
        <rect y="430" width="1440" height="50" fill="#0B3A66" opacity="0.04" />

        <motion.path
          d="M0,515 C180,485 340,555 520,520 C720,480 900,555 1100,515 C1240,488 1340,505 1440,495 L1440,900 L0,900 Z"
          fill="url(#oceanDeep)"
          animate={{
            d: [
              "M0,515 C180,485 340,555 520,520 C720,480 900,555 1100,515 C1240,488 1340,505 1440,495 L1440,900 L0,900 Z",
              "M0,525 C200,555 360,485 540,525 C740,570 880,485 1080,530 C1240,555 1340,525 1440,515 L1440,900 L0,900 Z",
              "M0,515 C180,485 340,555 520,520 C720,480 900,555 1100,515 C1240,488 1340,505 1440,495 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,555 C220,530 400,595 620,560 C860,520 1040,600 1260,565 C1350,550 1400,560 1440,555 L1440,900 L0,900 Z"
          fill="url(#oceanMid)"
          animate={{
            d: [
              "M0,555 C220,530 400,595 620,560 C860,520 1040,600 1260,565 C1350,550 1400,560 1440,555 L1440,900 L0,900 Z",
              "M0,565 C200,600 420,535 640,570 C880,610 1020,535 1240,575 C1350,595 1400,570 1440,565 L1440,900 L0,900 Z",
              "M0,555 C220,530 400,595 620,560 C860,520 1040,600 1260,565 C1350,550 1400,560 1440,555 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.ellipse
          cx="980"
          cy="555"
          rx="320"
          ry="48"
          fill="url(#oceanShimmer)"
          animate={{ opacity: [0.4, 0.75, 0.4], rx: [290, 340, 290] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <ellipse
          cx="1040"
          cy="545"
          rx="160"
          ry="18"
          fill="#FFF3C4"
          opacity="0.12"
        />

        <path
          d="M0,615 C300,590 520,645 760,615 C1020,580 1220,645 1440,620 L1440,900 L0,900 Z"
          fill="url(#foamLine)"
        />
        <path
          d="M0,715 C280,675 480,755 760,715 C1040,675 1240,755 1440,725 L1440,900 L0,900 Z"
          fill="url(#sandBank)"
        />
        <path
          d="M0,775 C320,750 560,805 860,770 C1120,740 1300,805 1440,770 L1440,900 L0,900 Z"
          fill="#E8DFC8"
          opacity="0.9"
        />

        {/* Sea oats — left */}
        <g opacity="0.88">
          <path
            d="M120,780 C118,720 110,660 105,610"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M105,610 C95,595 88,590 78,588"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="72"
            cy="586"
            rx="10"
            ry="4"
            fill="#8A9A55"
            transform="rotate(-25 72 586)"
          />
          <path
            d="M108,640 C120,625 128,620 140,618"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="148"
            cy="616"
            rx="11"
            ry="4"
            fill="#8A9A55"
            transform="rotate(20 148 616)"
          />
          <path
            d="M168,790 C170,730 178,670 185,625"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M185,625 C198,612 208,608 220,608"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="228"
            cy="607"
            rx="11"
            ry="4"
            fill="#8A9A55"
            transform="rotate(18 228 607)"
          />
          <path
            d="M210,800 C208,750 202,700 198,660"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse
            cx="188"
            cy="652"
            rx="9"
            ry="3.5"
            fill="#8A9A55"
            transform="rotate(-30 188 652)"
          />
          <ellipse
            cx="212"
            cy="658"
            rx="9"
            ry="3.5"
            fill="#7A8B4A"
            transform="rotate(25 212 658)"
          />
        </g>

        {/* Sea oats — right */}
        <g opacity="0.72">
          <path
            d="M1280,760 C1282,710 1290,660 1295,620"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse
            cx="1282"
            cy="612"
            rx="9"
            ry="3.5"
            fill="#8A9A55"
            transform="rotate(-28 1282 612)"
          />
          <ellipse
            cx="1310"
            cy="618"
            rx="9"
            ry="3.5"
            fill="#7A8B4A"
            transform="rotate(22 1310 618)"
          />
          <path
            d="M1325,770 C1328,720 1335,675 1340,640"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <ellipse
            cx="1352"
            cy="634"
            rx="9"
            ry="3.5"
            fill="#8A9A55"
            transform="rotate(20 1352 634)"
          />
        </g>

        {/* Lighthouse — signature identity, composed on the right */}
        <g transform="translate(820, 165)">
          <ellipse cx="160" cy="482" rx="140" ry="34" fill="#072844" opacity="0.2" />
          <path
            d="M35,468 C60,418 98,392 150,386 C188,382 230,400 270,432 C296,454 310,468 318,484 L35,484 Z"
            fill="#0B3A66"
          />
          <path
            d="M48,470 C78,438 115,420 155,416 C198,412 240,434 278,468"
            fill="none"
            stroke="#DCEFF7"
            strokeOpacity="0.18"
            strokeWidth="2"
          />
          <ellipse cx="90" cy="458" rx="22" ry="12" fill="#145A82" opacity="0.5" />
          <ellipse cx="235" cy="462" rx="20" ry="11" fill="#0B3A66" opacity="0.45" />
          <ellipse cx="160" cy="472" rx="28" ry="10" fill="#072844" opacity="0.35" />

          <circle
            cx="160"
            cy="118"
            r="90"
            fill="#D4AF37"
            opacity="0.06"
            filter="url(#softBlur)"
          />

          <motion.g
            style={{ transformOrigin: "160px 118px" }}
            animate={{ rotate: [-30, 34, -30], opacity: [0.7, 0.95, 0.7] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M168,118 L520,20 L545,210 Z"
              fill="url(#beamGrad)"
              opacity="0.9"
            />
            <path
              d="M168,120 L490,145 L470,235 Z"
              fill="#FFF3C4"
              opacity="0.1"
            />
            <path
              d="M168,118 L400,80 L410,160 Z"
              fill="#FFE9A3"
              opacity="0.18"
            />
          </motion.g>

          <path d="M112,455 L128,155 L192,155 L208,455 Z" fill="url(#towerBody)" />
          <path
            d="M112,455 L128,155 L140,155 L130,455 Z"
            fill="#FFFFFF"
            opacity="0.12"
          />
          <path
            d="M190,155 L192,155 L208,455 L196,455 Z"
            fill="#0B3A66"
            opacity="0.08"
          />
          <path d="M118,400 L134,345 L186,345 L202,400 Z" fill="url(#towerStripe)" />
          <path d="M124,290 L136,240 L184,240 L196,290 Z" fill="url(#towerStripe)" />

          <rect x="116" y="145" width="88" height="12" rx="2" fill="#0B3A66" />
          {[122, 140, 158, 176, 194].map((x) => (
            <rect key={x} x={x} y="136" width="3.5" height="11" fill="#D4AF37" />
          ))}
          <rect x="116" y="134" width="88" height="3" rx="1" fill="#D4AF37" opacity="0.85" />

          <rect x="132" y="96" width="56" height="42" rx="3" fill="#F8F3E8" />
          <rect
            x="136"
            y="100"
            width="14"
            height="34"
            rx="1"
            fill="#0B3A66"
            opacity="0.72"
          />
          <rect x="153" y="100" width="14" height="34" rx="1" fill="#E8F4F9" />
          <rect
            x="170"
            y="100"
            width="14"
            height="34"
            rx="1"
            fill="#0B3A66"
            opacity="0.72"
          />

          <path d="M124,98 L160,58 L196,98 Z" fill="#0B3A66" />
          <path d="M132,98 L160,68 L188,98 Z" fill="#145A82" opacity="0.45" />
          <circle cx="160" cy="56" r="5" fill="#D4AF37" />
          <rect x="158" y="42" width="4" height="16" rx="1" fill="#D4AF37" />

          <circle cx="160" cy="118" r="58" fill="url(#lanternCore)" />
          <circle cx="160" cy="118" r="10" fill="#FFF8DC" opacity="0.85" />

          <rect x="146" y="415" width="28" height="40" rx="2" fill="#072844" />
          <circle cx="168" cy="436" r="1.8" fill="#D4AF37" />
        </g>

        <rect width="1440" height="900" fill="url(#textVeil)" />
      </svg>
    </motion.div>
  );
}
