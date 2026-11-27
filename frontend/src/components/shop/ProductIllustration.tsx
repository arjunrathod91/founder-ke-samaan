import type { ReactNode } from "react";

type ProductIllustrationProps = {
  productId: number;
};

const illustrations: Record<number, ReactNode> = {
  // 1. FOUNDER TEE
  1: (
    <>
      <path
        d="M72 34 L94 20 Q120 39 146 20 L168 34 L190 56 L174 70 L159 57 L159 137 L81 137 L81 57 L66 70 L50 56 Z"
        fill="#E5242A"
        stroke="#17130F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M94 20 Q98 39 120 39 Q142 39 146 20"
        fill="none"
        stroke="#17130F"
        strokeWidth="2"
      />
      <g fill="#FFF9E9" textAnchor="middle" fontWeight="bold">
        <text x="120" y="81" fontSize="10">FOUNDER</text>
        <text x="120" y="94" fontSize="10">KE</text>
        <text x="120" y="107" fontSize="10">SAMAAN</text>
      </g>
    </>
  ),

  // 2. BUILDER CAP
  2: (
    <>
      <path
        d="M55 111 Q56 49 111 38 Q167 42 177 111 Z"
        fill="#FFD83D"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <path
        d="M55 111 Q105 105 177 111"
        fill="none"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <path
        d="M177 111 Q205 109 222 122 Q206 133 182 123 Z"
        fill="#FFD83D"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <circle cx="112" cy="38" r="4" fill="#17130F" />
    </>
  ),

  // 3. CARRY BAG
  3: (
    <>
      <path
        d="M79 65 L161 65 L161 139 Q161 145 155 145 L85 145 Q79 145 79 139 Z"
        fill="#FFF9E9"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <path
        d="M98 65 Q98 32 120 32 Q142 32 142 65"
        fill="none"
        stroke="#17130F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text
        x="120"
        y="104"
        fontSize="12"
        textAnchor="middle"
        fill="#17130F"
        fontWeight="bold"
      >
        FKS
      </text>
    </>
  ),

  // 4. STICKER PACK
  4: (
    <>
      <g transform="rotate(-8 99 80)">
        <rect
          x="48" y="38" width="84" height="91" rx="10"
          fill="#FFF9E9"
          stroke="#17130F"
          strokeWidth="2.5"
        />
      </g>
      <g transform="rotate(7 143 94)">
        <rect
          x="98" y="57" width="84" height="91" rx="10"
          fill="#E5242A"
          stroke="#17130F"
          strokeWidth="2.5"
        />
        <text
          x="140" y="111"
          textAnchor="middle"
          fill="#FFF9E9"
          fontSize="19"
          fontWeight="bold"
        >
          FKS
        </text>
      </g>
    </>
  ),

  // 5. NFC CARD
  5: (
    <>
      <rect
        x="48" y="43" width="144" height="84" rx="9"
        fill="#FFD83D"
        stroke="#FFF9E9"
        strokeWidth="3"
      />
      <text
        x="112"
        y="112"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#17130F"
      >
        FOUNDER KE SAMAAN
      </text>
      <path
        d="M157 67 Q177 85 157 103 M169 76 Q181 85 169 94"
        fill="none"
        stroke="#E5242A"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  ),

  // 6. NFC BAG TAG
  6: (
    <>
      <circle
        cx="120" cy="37" r="9"
        fill="none"
        stroke="#17130F"
        strokeWidth="3"
      />
      <path
        d="M120 46 L120 54"
        stroke="#17130F"
        strokeWidth="3"
      />
      <circle
        cx="120" cy="96" r="44"
        fill="#FFF9E9"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <path
        d="M111 76 Q131 96 111 116 M124 83 Q138 96 124 109"
        fill="none"
        stroke="#E5242A"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </>
  ),

  // 7. DIGITAL TEE
  7: (
    <>
      <rect
        x="43" y="47" width="154" height="66" rx="7"
        fill="#FFD83D"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <text
        x="120"
        y="86"
        textAnchor="middle"
        fill="#17130F"
        fontSize="10"
        fontWeight="bold"
      >
        FOUNDER KE SAMAAN
      </text>
      <circle
        cx="120" cy="126" r="23"
        fill="#FFF9E9"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <text
        x="120"
        y="130"
        textAnchor="middle"
        fill="#17130F"
        fontSize="12"
        fontWeight="bold"
      >
        FKS
      </text>
    </>
  ),

  // 8. DAY ONE KIT
  8: (
    <>
      <rect
        x="59" y="55" width="122" height="87" rx="5"
        fill="#FFF9E9"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <rect
        x="53" y="39" width="134" height="25" rx="4"
        fill="#E5242A"
        stroke="#17130F"
        strokeWidth="2.5"
      />
      <path
        d="M120 64 V142"
        stroke="#17130F"
        strokeWidth="11"
      />
      <path
        d="M120 64 V142"
        stroke="#FFF9E9"
        strokeWidth="5"
      />
    </>
  ),

  // 9. CO-FOUNDER KIT
  9: (
    <>
      <path
        d="M48 65 L65 46 L83 52 Q97 42 111 52 L130 46 L147 65 L132 79 L121 69 L121 135 L73 135 L73 69 L62 79 Z"
        fill="#FFD83D"
        stroke="#17130F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M120 65 L137 46 L155 52 Q169 42 183 52 L202 46 L219 65 L204 79 L193 69 L193 135 L145 135 L145 69 L134 79 Z"
        fill="#FFF9E9"
        stroke="#17130F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </>
  ),
};

export default function ProductIllustration({
  productId,
}: ProductIllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Product illustration"
      className="h-full w-full max-h-full max-w-full"
    >
      {illustrations[productId] ?? illustrations[1]}
    </svg>
  );
}
