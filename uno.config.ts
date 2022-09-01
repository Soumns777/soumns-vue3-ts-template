import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      base: '#fff', // 白色
      dfl: '#80D1C8', // 蒂芙尼绿
      kly: '#002EA6', // 克莱因蓝
      npl: '#FFE78F', // 拿坡里黄
      zgh: '#D7000F', // 中国红
      ams: '#FF770F', // 爱马仕橙
      dark: '#000010', //漆黑
    },
  },
  rules: [
    // 在这个可以增加预设规则, 也可以使用正则表达式
    [
      'soumns-center', // 使用时只需要写 p-c 即可应用该组样式
      {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        'box-sizing': 'border-box',
      },
    ],
    [
      'soumns-flex',
      {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'box-sizing': 'border-box',
      },
    ],
    [
      'soumns-min',
      {
        'min-width': '100vw',
        'min-height': '100vh',
        'box-sizing': 'border-box',
      },
    ],
    // 动态背景
    [
      /^soumns-bg-(.*)$/,
      ([_, d]) => {
        let img = d.split('-')[0];
        let type = d.split('-')[1];
        return {
          background: `url(./src/assets/uploads/${img}.${type})`,
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat',
          'box-sizing': 'border-box',
        };
      },
    ],
    [
      /^soumns-b-(.*)$/,
      ([_, d]) => {
        return {
          'border-radius': `${d}%`,
          // 'box-shadow':
          //   'inset 0px 0px 50px #fff,inset 10px 0px 80px #f0f,inset -10px 0px 80px #0ff,inset 10px 0px 180px #f0f,inset -10px 0px 180px #0ff,0px 0px 50px #fff,   10px 0px 50px #0ff, -10px 0px 50px #f0f',

          'box-shadow':
            '0 5px 21px rgb(0 0 0 / 19%), 0 0px 6px rgb(0 0 0 / 23%)',
        };
      },
    ],
  ],
  shortcuts: [
    // 动态颜色
    [
      /^soumns-btn-(.*)$/,
      ([, c]) =>
        `bg-${c}-400 text-${c}-100  py-2 px-4  font-semibold rounded-lg shadow-md  border-none  cursor-pointer text-center`,
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
