let items = [1, 2, 3, 4, 5, 6, 7, 8].map(x => ({
  id: x,
  name: "Some book",
  description: "this book sucksthis book sucksthis book sucksthis book sucksthis book sucksthis book sucksthis book sucksthis book sucks",
  image: "https://i.imgur.com/ESSkOdv.jpeg"
}));

let webDev = {
  id: 1,
  name: "Web Development",
  description: "Everything related to Web Development, backend, frontend, it doesnt matter, as long as it helps me build webs, or design them",
  image: "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  items
}

let philosophy = {
  id: 2,
  name: "Philosophy",
  description: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present .Everything related to philosophy.",
  image: "https://i.imgur.com/tGeep1V.jpg",
  items
}

const Sections = [webDev, philosophy];
export default Sections;