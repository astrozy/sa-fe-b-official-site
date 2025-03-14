const contentPc = require('../../../../public/img/copymaster/contentPc.png')
const content = require('../../../../public/img/copymaster/content.png')
const scenePc = require('../../../../public/img/copymaster/scenePc.png')
const scene = require('../../../../public/img/copymaster/scene.png')
const frontPc = require('../../../../public/img/copymaster/frontPc.png')
const front = require('../../../../public/img/copymaster/front.png')
const customPc = require('../../../../public/img/copymaster/customPc.png')
const custom = require('../../../../public/img/copymaster/custom.png')

export const bannerData = [
  {
    type: 'content',
    title: '内容精准，转化更佳',
    info: ['聚焦在出海电商场景进行AI训练，生成的文案让消费者转化效果更佳'],
    image: content,
    imagePc: contentPc,
    height: 331,
    heightPc: 330,
    widthPc: 535
  },
  {
    type: 'scene',
    title: '全景覆盖，一键生成',
    image: scene,
    imagePc: scenePc,
    info: ['数十种模板，涵盖跨境电商全场景文案，秒变专家'],
    height: 321,
    heightPc: 330,
    widthPc: 531
  },
  {
    type: 'front',
    title: '前沿技术，抢先体验',
    image: front,
    imagePc: frontPc,
    info: ['集成最先进的GPT模型，生成内容更优质'],
    height: 310,
    heightPc: 340,
    widthPc: 553
  },
  {
    type: 'custom',
    title: '灵活定制，个性模板',
    image: custom,
    imagePc: customPc,
    info: ['支持自定义模板生成，构建自己的专属提效模板'],
    height: 317,
    heightPc: 345,
    widthPc: 538
  }
]
