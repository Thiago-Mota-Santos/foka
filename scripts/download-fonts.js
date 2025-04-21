/**
 * FONT IMPLEMENTATION NOTE
 *
 * We originally attempted to use the Puffin font, but encountered issues with the 
 * Next.js local font loading mechanism.
 *
 * As a solution, we're now using Montserrat from Google Fonts as an alternative,
 * which has similar clean, modern characteristics to Puffin.
 *
 * If you still want to use Puffin:
 * 1. You'll need to purchase the font and host it on your server
 * 2. Use standard CSS @font-face rules in globals.css instead of the Next.js font module
 * 3. Example:
 *    @font-face {
 *      font-family: 'Puffin';
 *      src: url('/fonts/Puffin-Regular.woff2') format('woff2');
 *      font-weight: 400;
 *      font-style: normal;
 *      font-display: swap;
 *    }
 *    @font-face {
 *      font-family: 'Puffin';
 *      src: url('/fonts/Puffin-Bold.woff2') format('woff2');
 *      font-weight: 700;
 *      font-style: normal;
 *      font-display: swap;
 *    }
 */

console.log(
  'Using Montserrat from Google Fonts as an alternative to Puffin. See this file for details.'
)
