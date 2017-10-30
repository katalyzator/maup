# coding=utf-8
from django.contrib import admin

from main.models import News, Slider, University, Conference, NewsImage, EventImage, Gallery

admin.site.site_header = 'Панель управления сайтом MAUB.ORG'


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


class ConferenceAdmin(admin.ModelAdmin):
    class Meta:
        model = Conference

    list_display = ['title', 'description', 'date_start']


class NewsImageAdmin(admin.ModelAdmin):
    class Meta:
        model = NewsImage

    list_display = ['title']


class EventImageAdmin(admin.ModelAdmin):
    class Meta:
        model = EventImage

    list_display = ['title']


class GalleryImageAdmin(admin.ModelAdmin):
    class Meta:
        model = Gallery

    list_display = ['title']


admin.site.register(Gallery, GalleryImageAdmin)
admin.site.register(NewsImage, NewsImageAdmin)
admin.site.register(EventImage, EventImageAdmin)
admin.site.register(Conference, ConferenceAdmin)
admin.site.register(University, UniversityAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Slider, SliderAdmin)
