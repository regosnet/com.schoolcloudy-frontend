declare var $: any;

const GRAPHICS_ROOT_SRC = './assets/scclgraphics/';
const SVGS_SRC = GRAPHICS_ROOT_SRC + 'svgs/';
const COUNTRY_FLAGS_SRC = SVGS_SRC + 'countryFlags/';
const LANGUAGE_FILES_SRC = './assets/i18n/langs/';
const USERNAME_KEY = 'stukvr_xr';
const SCCL_API_URL = 'http://localhost:8080/schoolcloudy/api/';

const dimensions = {
        resWidthL: 1295,
        resWidthCollapseSidebar: 1200,
        resWidthHideSidebar: 500
};

const scclLayoutHeight = {
        height: window.innerHeight
};

const srcUrl = {
          root: GRAPHICS_ROOT_SRC,
          langs: LANGUAGE_FILES_SRC,
          cflags: COUNTRY_FLAGS_SRC
};

const slimScrollObject =  {
          axis: 'y',
          theme: 'sccl-default-theme',
          contentTouchScroll: 10,
          documentTouchScroll: true,
          mouseWheel: { enable: true },
          scrollAmount: 0,
          scrollInertia: 230,
          scrollbarPosition: 'outside'
};

const SCCL_THEMES = {
        theme: {
            options: [
                {title: 'Dark', value: 'dark', icon: 'dark'},
                {title: 'Light', value: 'light', icon: 'light'},
            ],
            label: {title: 'sccl.settings.theme.select.label.title'}
    }
};

export const scclContants = {
    srcUrl : srcUrl,
    layoutHeight: scclLayoutHeight.height,
    scclThemes: SCCL_THEMES,
    slimScrollObject: slimScrollObject,
    screen: dimensions,
    usr_key: USERNAME_KEY,
    api_url_path: SCCL_API_URL
};




