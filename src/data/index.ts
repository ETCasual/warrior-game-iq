type Maybe<T> = T | undefined;

type AnswerData = {
  correct: boolean;
  word: string;
};

export type QuestionDataType = Record<
  Question,
  {
    question: string;
    answers: Record<Answer, Maybe<AnswerData>>;
  }
>;

export const qData: QuestionDataType = {
  q1: {
    question: "大马果树是什么？",
    answers: {
      a: {
        correct: false,
        word: "余甘子 POKOK MELAKA",
      },
      b: {
        correct: false,
        word: "榴梿树 POKOK DURIAN",
      },
      c: {
        correct: false,
        word: "望天树 POKOK MERANTI",
      },
      d: {
        correct: true,
        word: "印茄树 POKOK MERBAU",
      },
    },
  },

  q2: {
    question: "马来西亚最长河流？",
    answers: {
      a: {
        correct: false,
        word: "彭亨河",
      },
      b: {
        correct: true,
        word: "拉让江",
      },
      c: {
        correct: false,
        word: "亚庇江",
      },
      d: {
        correct: false,
        word: "古晋河",
      },
    },
  },
  q3: {
    question: "马来西亚护照不能去哪一个国家？",
    answers: {
      a: {
        correct: false,
        word: "巴勒斯坦",
      },
      b: {
        correct: true,
        word: "以色列",
      },
      c: {
        correct: false,
        word: "津巴布韦",
      },
      d: {
        correct: false,
        word: "朝鲜",
      },
    },
  },
  q4: {
    question: "以下车牌英文字母配州属，哪一个错误？",
    answers: {
      a: {
        correct: false,
        word: "玻璃市 (R) / 登嘉楼 (T)",
      },
      b: {
        correct: false,
        word: "霹雳 (A) / 彭亨 (C)",
      },
      c: {
        correct: false,
        word: "吉打 (K) / 马六甲 (M)",
      },
      d: {
        correct: true,
        word: "雪兰莪 (B) / 吉兰丹(K)",
      },
    },
  },
  q5: {
    question: "人体最大的细胞是？",
    answers: {
      a: {
        correct: true,
        word: "卵细胞",
      },
      b: {
        correct: false,
        word: "脑细胞",
      },
      c: {
        correct: false,
        word: "淋巴细胞",
      },
      d: {
        correct: false,
        word: "干细胞",
      },
    },
  },
  q6: {
    question: "起初婚礼上放鞭炮是为了？",
    answers: {
      a: {
        correct: true,
        word: "震妖除邪",
      },
      b: {
        correct: false,
        word: "增加喜庆",
      },
      c: {
        correct: false,
        word: "求子",
      },
      d: {
        correct: false,
        word: "祝愿婚后美好",
      },
    },
  },
  q7: {
    question: "苍蝇飞落在某处就匆忙搓脚，它是在？",
    answers: {
      a: {
        correct: false,
        word: "清洁污物，准备开饭",
      },
      b: {
        correct: false,
        word: "发射生物雷达波",
      },
      c: {
        correct: false,
        word: "辨别同类气味",
      },
      d: {
        correct: true,
        word: "品尝味道",
      },
    },
  },
  q8: {
    question: "血液占人体比重的？",
    answers: {
      a: {
        correct: true,
        word: "7-8%",
      },
      b: {
        correct: false,
        word: "17-18%",
      },
      c: {
        correct: false,
        word: "10-12%",
      },
      d: {
        correct: false,
        word: "30-38%",
      },
    },
  },
  q9: {
    question: "人的下列感观中哪个反应最快？",
    answers: {
      a: {
        correct: false,
        word: "嗅觉",
      },
      b: {
        correct: false,
        word: "视觉",
      },
      c: {
        correct: false,
        word: "听觉",
      },
      d: {
        correct: true,
        word: "味觉",
      },
    },
  },
  q10: {
    question: "如果把一个成人的所有血管连接起来，其长度接近？",
    answers: {
      a: {
        word: "十公里",
        correct: false,
      },
      b: {
        word: "一千公里",
        correct: false,
      },
      c: {
        word: "一万公里",
        correct: false,
      },
      d: {
        word: "十万公里",
        correct: true,
      },
    },
  },
  q11: {
    question: "我们日常的主食属于？",
    answers: {
      a: {
        word: "酸性食物",
        correct: true,
      },
      b: {
        word: "碱性食物",
        correct: false,
      },
      c: {
        word: "中性食物",
        correct: false,
      },
      d: {
        word: "半酸半碱食物",
        correct: false,
      },
    },
  },
  q12: {
    question: "在生活中常说的“五金”不包括下列哪种金属",
    answers: {
      a: {
        word: "金",
        correct: false,
      },
      b: {
        word: "铁",
        correct: false,
      },
      c: {
        word: "锌",
        correct: true,
      },
      d: {
        word: "锡",
        correct: false,
      },
    },
  },
  q13: {
    question: "营养学家分析了各种蔬菜的养分，下列哪一个的营养物质最低？",
    answers: {
      a: {
        word: "红色蔬菜",
        correct: false,
      },
      b: {
        word: "白色蔬菜",
        correct: true,
      },
      c: {
        word: "绿色蔬菜",
        correct: false,
      },
      d: {
        word: "黄色蔬菜",
        correct: false,
      },
    },
  },
  q14: {
    question: "下列哪一种动物是“唯一能参加奥运会的动物”？",
    answers: {
      a: {
        word: "河马",
        correct: false,
      },
      b: {
        word: "狗",
        correct: false,
      },
      c: {
        word: "猩猩",
        correct: false,
      },
      d: {
        word: "马",
        correct: true,
      },
    },
  },
  q15: {
    question: "下列动物中不能够眨眼的动物是？",
    answers: {
      a: {
        word: "蛇",
        correct: true,
      },
      b: {
        word: "蜥蜴",
        correct: false,
      },
      c: {
        word: "青蛙",
        correct: false,
      },
      d: {
        word: "乌龟",
        correct: false,
      },
    },
  },
  q16: {
    question: "喝酒对人体的哪一器官有害？",
    answers: {
      a: {
        word: "眼睛",
        correct: false,
      },
      b: {
        word: "皮肤",
        correct: false,
      },
      c: {
        word: "心脏",
        correct: true,
      },
      d: {
        word: "肺",
        correct: false,
      },
    },
  },
  q17: {
    question: "水约占人体重的多少，用以维持人体正常的生理活动？",
    answers: {
      a: {
        word: "3/5",
        correct: false,
      },
      b: {
        word: "1/2",
        correct: false,
      },
      c: {
        word: "4/5",
        correct: false,
      },
      d: {
        word: "2/3",
        correct: true,
      },
    },
  },
  q18: {
    question: "动物中视角最大的是？",
    answers: {
      a: {
        word: "鸟",
        correct: false,
      },
      b: {
        word: "鱼",
        correct: true,
      },
      c: {
        word: "马",
        correct: false,
      },
      d: {
        word: "虎",
        correct: false,
      },
    },
  },
  q19: {
    question: "“奥斯卡金像奖“是哪个国家的奖项？",
    answers: {
      a: {
        word: "法国",
        correct: false,
      },
      b: {
        word: "美国",
        correct: true,
      },
      c: {
        word: "瑞典",
        correct: false,
      },
      d: {
        word: "加拿大",
        correct: false,
      },
    },
  },
  q20: {
    question: "排球比赛场上，一方运动员人数为？",
    answers: {
      a: {
        word: "5人",
        correct: false,
      },
      b: {
        word: "7人",
        correct: true,
      },
      c: {
        word: "6人",
        correct: false,
      },
      d: {
        word: "9人",
        correct: false,
      },
    },
  },
  q21: {
    question: "人体可以导电是因为人体中含有",
    answers: {
      a: {
        word: "蛋白质",
        correct: false,
      },
      b: {
        word: "脂肪",
        correct: false,
      },
      c: {
        word: "水",
        correct: true,
      },
      d: {
        word: "金属元素",
        correct: false,
      },
    },
  },
  q22: {
    question: "在马来西亚只要携带多少克大麻就可罪成死刑？",
    answers: {
      a: {
        word: "50",
        correct: false,
      },
      b: {
        word: "100",
        correct: false,
      },
      c: {
        word: "150",
        correct: false,
      },
      d: {
        word: "200",
        correct: true,
      },
    },
  },
  q23: {
    question: "一些修车厂有“打马吉”的服务，“打马吉”的意思是",
    answers: {
      a: {
        word: "给漆身打蜡",
        correct: false,
      },
      b: {
        word: "维修大镜",
        correct: false,
      },
      c: {
        word: "翻新车漆",
        correct: false,
      },
      d: {
        word: "修复凹陷",
        correct: true,
      },
    },
  },
  q24: {
    question: "在古代，人们怎样尊称对方的妻子？",
    answers: {
      a: {
        word: "令爱",
        correct: false,
      },
      b: {
        word: "令正",
        correct: true,
      },
      c: {
        word: "令堂",
        correct: false,
      },
      d: {
        word: "令尊",
        correct: false,
      },
    },
  },
  q25: {
    question: "人体每天需要呼吸几次",
    answers: {
      a: {
        word: "10,000",
        correct: false,
      },
      b: {
        word: "15,000",
        correct: false,
      },
      c: {
        word: "20,000",
        correct: true,
      },
      d: {
        word: "25,000",
        correct: false,
      },
    },
  },
  q26: {
    question: "章鱼有几颗心？",
    answers: {
      a: {
        word: "1",
        correct: false,
      },
      b: {
        word: "2",
        correct: false,
      },
      c: {
        word: "3",
        correct: true,
      },
      d: {
        word: "4",
        correct: false,
      },
    },
  },
  q27: {
    question: "水的沸点是多少？",
    answers: {
      a: {
        word: "194 华氏度",
        correct: false,
      },
      b: {
        word: "203 华氏度",
        correct: false,
      },
      c: {
        word: "212 华氏度",
        correct: true,
      },
      d: {
        word: "221 华氏度",
        correct: false,
      },
    },
  },
  q28: {
    question: "太阳系中的哪颗行星被称为红色星球？",
    answers: {
      a: {
        word: "土星",
        correct: false,
      },
      b: {
        word: "火星",
        correct: true,
      },
      c: {
        word: "金星",
        correct: false,
      },
      d: {
        word: "水星",
        correct: false,
      },
    },
  },
  q29: {
    question: "尼罗河多长？",
    answers: {
      a: {
        word: "6,650km",
        correct: true,
      },
      b: {
        word: "6,550km",
        correct: false,
      },
      c: {
        word: "5,550km",
        correct: false,
      },
      d: {
        word: "5000km",
        correct: false,
      },
    },
  },
  q30: {
    question: "人类最大的器官是？",
    answers: {
      a: {
        word: "肠脏",
        correct: false,
      },
      b: {
        word: "脑",
        correct: false,
      },
      c: {
        word: "骨骼",
        correct: false,
      },
      d: {
        word: "皮肤",
        correct: true,
      },
    },
  },
};

export type Question =
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "q6"
  | "q7"
  | "q8"
  | "q9"
  | "q10"
  | "q11"
  | "q12"
  | "q13"
  | "q14"
  | "q15"
  | "q16"
  | "q17"
  | "q18"
  | "q19"
  | "q20"
  | "q21"
  | "q22"
  | "q23"
  | "q24"
  | "q25"
  | "q26"
  | "q27"
  | "q28"
  | "q29"
  | "q30";
export type Answer = "a" | "b" | "c" | "d";
