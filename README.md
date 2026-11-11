# ნიკა აშვეთიას პორტფოლიო - React ვერსია

ეს პროექტი გადაყვანილია **React**-ზე კომპონენტური არქიტექტურით (Component-Based Architecture).
მთავარი გვერდი დაყოფილია დამოუკიდებელ სექციებად, ხოლო გამეორებადი ვიზუალური ელემენტები (ბარათები / ქარდები) ჩანაცვლებულია მრავალჯერ გამოყენებადი (Reusable) კომპონენტებით Props-ების მეშვეობით.

---

## 📁 პროექტის სტრუქტურა

```text
portfolio/
├── index.html                 # მთავარი HTML ფაილი (მუშაობს პირდაპირ ბრაუზერში React 18 + Babel-ით)
├── index.vanilla-backup.html  # წინა ვანილა HTML-ის სარეზერვო ასლი
├── style.css                  # პორტფოლიოს ძირითადი სტილები და ანიმაციები
├── photo/
│   └── messi.jpg              # პროფილის ფოტო
├── data/
│   └── portfolioData.js       # მონაცემთა მასივები (Skills, Projects, Education)
├── components/                # მოდულარული React კომპონენტები
│   ├── Section.jsx            # Reusable სექციის კონტეინერი (სათაურით, სუბტიტრით და ბეიჯით)
│   ├── SkillCard.jsx          # Reusable ბარათი უნარებისთვის
│   ├── ProjectCard.jsx        # Reusable ბარათი პროექტებისთვის
│   ├── EducationCard.jsx      # Reusable ბარათი განათლებისთვის
│   ├── UserCard.jsx           # Reusable ბარათი JSONPlaceholder მომხმარებლებისთვის
│   ├── CommentCard.jsx        # Reusable ბარათი JSONPlaceholder კომენტარებისთვის
│   ├── Navbar.jsx             # ნავიგაცია ადაპტური ჰამბურგერ მენიუთი (React State)
│   ├── AboutSection.jsx       # "ჩემ შესახებ" სექცია
│   ├── SkillsSection.jsx      # უნარების სექცია (SkillCard-ების რენდერით)
│   ├── ProjectsSection.jsx    # პროექტების სექცია (ProjectCard-ების რენდერით)
│   ├── EducationSection.jsx   # განათლების სექცია (EducationCard-ების რენდერით)
│   ├── UsersSection.jsx       # მომხმარებლები (Fetch API + useEffect + UserCard)
│   ├── CommentsSection.jsx    # კომენტარები (Fetch API + useEffect + CommentCard)
│   ├── ContactForm.jsx        # საკონტაქტო ფორმა (Controlled React Component)
│   └── Footer.jsx             # ფუტერი და Back to Top ფუნქციონალი
└── App.jsx                    # Root კომპონენტი
```

---

## 🧩 კომპონენტებად დაყოფა და Reusability

### 1. Reusable კომპონენტები (მრავალჯერადი ბარათები):
- **`SkillCard`**: იღებს `title`, `description`, `icon`, `borderClass`, `badge` props-ებს. გამოიყენება ნებისმიერი რაოდენობის უნარის ლამაზად გამოსატანად.
- **`ProjectCard`**: იღებს `title`, `description`, `icon`, `status`, `statusColor`, `tags`, `link` props-ებს.
- **`EducationCard`**: იღებს `title`, `level`, `badge`, `badgeColor`, `icon`, `description` props-ებს.
- **`UserCard`**: იღებს მომხმარებლის მონაცემებს (`name`, `email`, `phone`, `company`) და გენერირებს ავატარს პირველი ასოთი.
- **`CommentCard`**: იღებს კომენტარის მონაცემებს (`index`, `id`, `name`, `email`, `body`).
- **`Section`**: უნიფიცირებული შესაფუთი (Wrapper) კომპონენტი სათაურით, გრადიენტური ხაზით და ბეიჯით.

### 2. State & Effects (React Hooks):
- **`useState`**:
  - `Navbar`-ში მობილური მენიუს გახსნა/დახურვისთვის (`isOpen`).
  - `ContactForm`-ში ფორმის ველების მართვისთვის (`name`, `email`, `message`) და გაგზავნის სტატუსისთვის (`submitted`, `loading`).
  - `UsersSection` და `CommentsSection`-ში მონაცემების, `loading` და `error` სტატუსების მართვისთვის.
- **`useEffect`**:
  - `JSONPlaceholder` API-დან მონაცემების წამოსაღებად კომპონენტის ჩატვირთვისას (`https://jsonplaceholder.typicode.com/users` და `https://jsonplaceholder.typicode.com/comments?_limit=5`).

---

## 🚀 როგორ გავუშვათ?

საიტის სანახავად არ გჭირდებათ არანაირი რთული ბილდ-სისტემა:
1. უბრალოდ გახსენით `portfolio/index.html` ფაილი ნებისმიერ ბრაუზერში (მაგ: ორჯერ დაკლიკებით ან VS Code-ის **Live Server** გაფართოებით).
2. საიტი მომენტალურად ჩაიტვირთება React 18-ითა და Tailwind CSS-ით!

