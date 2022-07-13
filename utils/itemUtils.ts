export function itemTypeStyling(itemType: string) {
  switch (itemType) {
    case 'ASSIGNMENT':
      return 'bg-emerald-400 hover:bg-emerald-300';
    case 'NOTE':
      return 'bg-cyan-400 hover:bg-cyan-300';
    case 'PROJECT':
      return 'bg-fuchsia-400 hover:bg-fuchsia-300';
    case 'REMINDER':
      return 'bg-indigo-400 hover:bg-indigo-300';
    case 'MEETING':
      return 'bg-rose-400 hover:bg-rose-300';
    default:
      return 'bg-stone-100 hover:bg-white';
  }
}

export function itemBorder(itemType: string) {
  switch (itemType) {
    case 'ASSIGNMENT':
      return 'border-emerald-500';
    case 'NOTE':
      return 'border-cyan-500';
    case 'PROJECT':
      return 'border-fuchsia-500';
    case 'REMINDER':
      return 'border-indigo-500';
    case 'MEETING':
      return 'border-rose-500';
    default:
      return 'border-stone-100';
  }
}