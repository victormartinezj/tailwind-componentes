tippy("#tooltip-t", {
  content: "Tooltip on top",
});
tippy("#tooltip-b", {
  content: "Tooltip on bottom",
  placement: "bottom",
});
tippy("#tooltip-r", {
  content: "Tooltip on bottom",
  placement: "right",
});
tippy("#tooltip-l", {
  content: "Tooltip on bottom",
  placement: "left",
});

// html

tippy("#tooltip-t-html", {
  allowHTML: true,
  content:
    "<span class='text-red-500 font-semibold'>Tooltip</span> <span class='italic text-green-500'>with </span><span class='underline text-blue-500'>Tailwind</span> 🤫 ",
});
