export const emailRegEx = /^\S+@\S+\.\S+$/;
export const phoneRegEx = /^\d+$/;
export const phoneInputRegEx = /^\+?[\d-( )]+$/;
export const usernameRegEx = /^[A-Z_a-z]\w*$/;
export const webRedirectUriProtocolRegEx = /^https?:$/;
export const mobileUriSchemeProtocolRegEx = /^(?!http(s)?:)[a-z][\d+_a-z-]*(\.[\d+_a-z-]+)*:$/;
export const hexColorRegEx = /^#[\da-f]{3}([\da-f]{3})?$/i;
export const dateRegex = /^\d{4}(-\d{2}){2}/;
export const noSpaceRegEx = /^\S+$/;
/** Full domain that consists of at least 3 parts, e.g. foo.bar.com or example-foo.bar.com.
 *  Allows the first (least-significant) part of the domain to be a wildcard, or to end with a wildcard.
 */
export const domainRegEx =
  /^[\d*A-Za-z](?:[\dA-Za-z-]*[\d*A-Za-z])?(?:\.[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?){2,}$/;
