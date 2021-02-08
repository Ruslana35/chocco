const findBlock = alias =>{
  return $('.reviews__display-inner').filter((ndx,item)=>{
    return $(item).attr('data-article') == alias
  })
}

$('.interactive-avatar__link').click(e =>{
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlock(target)
  const curItem = $this.closest('.reviews__switcher-item');

  itemToShow.addClass('active').siblings().removeClass('active');

  curItem.addClass('interactive-avatar_active').siblings().removeClass('interactive-avatar_active');
})