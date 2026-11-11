// პორტფოლიოს სტატიკური მონაცემები (Data-driven architecture)

export const skillsData = [
  {
    id: 1,
    title: 'მათემატიკა',
    description: 'კარგად მესმის მათემატიკა, ალგორითმები და ლოგიკური ამოცანების ამოხსნა.',
    icon: '📐',
    borderClass: 'border-l-amber-500',
    badge: 'ლოგიკა'
  },
  {
    id: 2,
    title: 'ინგლისური ენა',
    description: 'კარგად ვიცი ინგლისური ენა, შემიძლია თავისუფლად კომუნიკაცია და დოკუმენტაციის გაგება.',
    icon: 'flag-uk',
    borderClass: 'border-l-emerald-500',
    badge: 'B2 / Fluent'
  },
  {
    id: 3,
    title: 'ვებ დეველოპმენტი',
    description: 'ვსწავლობ Full Stack ტექნოლოგიებს: HTML5, CSS3, JavaScript ES6+ და React.',
    icon: '💻',
    borderClass: 'border-l-blue-600',
    badge: 'Frontend'
  },
  {
    id: 4,
    title: 'React & Component Architecture',
    description: 'მთავარი გვერდის კომპონენტებად დაყოფა, Props, State და Reusable UI ბარათები.',
    icon: '⚛️',
    borderClass: 'border-l-cyan-500',
    badge: 'React'
  },
  {
    id: 5,
    title: 'Tailwind CSS & დიზაინი',
    description: 'თანამედროვე, ადაპტური (Responsive) და სუფთა ინტერფეისების აწყობა Tailwind-ით.',
    icon: '🎨',
    borderClass: 'border-l-indigo-500',
    badge: 'UI/UX'
  },
  {
    id: 6,
    title: 'REST API & Fetching',
    description: 'სერვერიდან ასინქრონული მონაცემების (JSON) წამოღება, დამუშავება და ეკრანზე ასახვა.',
    icon: '🌐',
    borderClass: 'border-l-violet-500',
    badge: 'API'
  }
];

export const projectsData = [
  {
    id: 1,
    title: 'ჩემი პორტფოლიო (React ვერსია)',
    description: 'თანამედროვე პორტფოლიოს ვებსაიტი შექმნილი React-ის კომპონენტური არქიტექტურით, Tailwind CSS-ით და API ინტეგრაციით.',
    icon: '⚡',
    status: 'დასრულებული',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    tags: ['React', 'Tailwind CSS', 'Components', 'Fetch API'],
    link: '#top'
  },
  {
    id: 2,
    title: 'Todo List აპლიკაცია',
    description: 'დავალებების მართვის ინტერაქტიული აპლიკაცია დამატების, წაშლის, რედაქტირების და ფილტრაციის ფუნქციებით.',
    icon: '📝',
    status: 'პროცესშია',
    statusColor: 'bg-blue-100 text-blue-800 border-blue-200',
    tags: ['React', 'TypeScript', 'State Management'],
    link: '../todo-list/index.html'
  },
  {
    id: 3,
    title: 'სამომავლო Full Stack პროექტები',
    description: 'ამ ეტაპზე აქტიურად ვმუშაობ ახალ საინტერესო პროექტებზე და მალე წარმოვადგენ ჩემს შექმნილ ვებ-აპლიკაციებს!',
    icon: '🚀',
    status: 'დაგეგმილი',
    statusColor: 'bg-amber-100 text-amber-800 border-amber-200',
    tags: ['Full Stack', 'Node.js', 'Database'],
    link: '#contact'
  }
];

export const educationData = [
  {
    id: 1,
    title: 'ტყაჩირის საჯარო სკოლა',
    level: 'საბაზო საფეხური',
    badge: 'მე-9 კლასი',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: '🏫',
    description: 'საბაზო განათლება, განსაკუთრებული ინტერესი ზუსტ მეცნიერებებში (მათემატიკა, ინფორმატიკა).'
  },
  {
    id: 2,
    title: 'GeoLab Academy',
    level: 'პროფესიული კურსი',
    badge: 'Full Stack Development',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: '🎓',
    description: 'ვებ-დეველოპმენტის საფუძვლები, თანამედროვე JavaScript, React ბიბლიოთეკა და რეალური პროექტების შექმნა.'
  }
];

