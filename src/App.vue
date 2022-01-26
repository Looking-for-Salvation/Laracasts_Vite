<template>
	<router-view name="rootroute"></router-view>
	<div id="root" class="page xl:flex">
		<div class="w-full xl:flex-1">
			<router-view></router-view>
			<the-footer></the-footer>
		</div>
	</div>
</template>
