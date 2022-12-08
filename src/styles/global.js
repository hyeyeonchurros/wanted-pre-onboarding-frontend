import { css } from "@emotion/react";
import reset from "emotion-reset";

export const global = css`
  * {
    font-family: "Noto Sans KR", sans-serif !important;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    user-select: none;
    -webkit-touch-callout: none;
    box-sizing: border-box;
  }
  body {
    background-color: #edf1ff;
  }
  ${reset}
`;
