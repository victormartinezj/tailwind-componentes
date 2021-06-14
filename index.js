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

// popover

tippy("#popover-t", {
  theme: "light-border",
  content: "Top popover",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
});
tippy("#popover-b", {
  theme: "light-border",
  placement: "bottom",
  content: "Bottom popover",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
});
tippy("#popover-r", {
  theme: "light-border",
  placement: "right",
  content: "Right popover",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
});
tippy("#popover-l", {
  theme: "light-border",
  placement: "left",
  content: "Left popover",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
});

// dropdown

const dropdownContent = document.getElementById("dropdown-content");

tippy("#dropdown-b", {
  theme: "light-border",
  content: dropdownContent.innerHTML,
  allowHTML: true,
  placement: "bottom",
  trigger: "click",
  hideOnClick: true,
  interactive: true,
  arrow: false,
  onCreate(instance) {
    console.log("create");
    instance._closeTippy = function (e) {
      console.log("close tippy");
      instance.hide();
    };
  },
  onMount(instance) {
    console.log("mount");
    const lista = document.getElementById("lista-close");
    lista.addEventListener("click", instance._closeTippy);
  },
  onHide(instance) {
    const lista = document.getElementById("lista-close");
    console.log("hide");
    lista.removeEventListener("click", instance._closeTippy);
  },
});
