
const detailLabel = {
  survivors_basic_pension: [ "child_additional_amount", "base_amount" ],
  survivors_welfare_pension: [ "widow_amount", "transitory_widow_amount" ]
}
const filterDetailTitle = {
  child_additional_amount: { includes: { common: [ "hasChild" ] } },
  base_amount: { includes: { common: [ "hasChild" ] } },
  widow_amount: {
    excludes: {
      common: [ "female" ],
      extend: [ "isPartnerAgeGreater55", "isLongTerm" ],
    },
  },
  transitory_widow_amount: {
    includes: {
      common: [ "female", "isEmployeeTimeGreater20" ],
      extend: [ "hasChild", "isMyAgeGreater40" ],
    },
    excludes: {
      common: ["isLongTerm"],
      extend: ["hasChild"]
    }
  }
}

const hasTitle = (data, title) => {
  const filter = filterDetailTitle[title];
  const keys = Object.keys(data).filter(key => data[key] === true)
  const includesCommon = !filter.includes.common ||!filter.includes.common.find(key => !keys.includes(key))
  const includesExtend = !filter.includes.extend || !!filter.includes.extend.find(key => keys.includes(key))
  const includes = includesCommon && includesExtend;

  const excludesCommon = !filter.excludes.common || !filter.excludes?.common?.find(key => !keys.includes(key))
  const excludesExtend = !filter.excludes.extend || !!filter.excludes?.extend?.find(key => keys.includes(key))
  const excludes = excludesCommon && excludesExtend;

  return includes && !excludes;
}

const data = {
  hasChild: false,
  female: true,
  isEmployeeTimeGreater20: true,
  isMyAgeGreater40: true,
  isLongTerm: true
}

const t = hasTitle(data, "transitory_widow_amount")

console.log(t);
