import ArchivoTtf from './Archivo/Archivo-Medium.ttf';
import BreeSerifTtf from './Bree_Serif/BreeSerif-Regular.ttf';
import SourceCodePro from './Source_Code_Pro/SourceCodePro-Regular.ttf';
 
export const archivo = {
 fontFamily: 'Archivo',
 fontStyle: 'medium',
 fontDisplay: 'swap',
 fontWeight: '600',
 src: `
   local('Archivo'),
   local('Archivo-Medium'),
   url(${ArchivoTtf}) format('ttf')
 `,
 unicodeRange:
   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
 
export const breeSerif = {
 fontFamily: 'BreeSerif',
 fontStyle: 'regular',
 fontDisplay: 'swap',
 fontWeight: '400',
 src: `
   local('BreeSerif'),
   local('BreeSerif-regular'),
   url(${BreeSerifTtf}) format('ttf')
 `,
 unicodeRange:
   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
 
export const sourceCodePro = {
 fontFamily: 'SourceCodePro',
 fontStyle: 'regular',
 fontDisplay: 'swap',
 fontWeight: '400',
 src: `
   local('SourceCodePro'),
   local('SourceCodePro-regular'),
   url(${SourceCodePro}) format('ttf')
 `,
 unicodeRange:
   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};