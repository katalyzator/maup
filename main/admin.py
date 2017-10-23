from django.contrib import admin

from main.models import News, Slider, University


class NewsAdmin(admin.ModelAdmin):
    class Meta:
        model = News

    list_display = ['title', 'description']


class SliderAdmin(admin.ModelAdmin):
    class Meta:
        model = Slider

    list_display = ['title']


class UniversityAdmin(admin.ModelAdmin):
    class Meta:
        model = University

    list_display = ['name']


admin.site.register(University, UniversityAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Slider, SliderAdmin)
