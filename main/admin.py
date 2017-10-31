# coding=utf-8
from django.contrib import admin
from modeltranslation.admin import TabbedExternalJqueryTranslationAdmin
from modeltranslation.translator import TranslationOptions, translator

from main.models import News, Slider, University, Conference, NewsImage, EventImage, Gallery

admin.site.site_header = 'Панель управления сайтом MAUB.ORG'


class NewsTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'content')


class EventTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


class PosterTranslationOptions(TranslationOptions):
    fields = ('title',)


class UniversityTranslationOptions(TranslationOptions):
    fields = ('name',)


translator.register(News, NewsTranslationOptions)
translator.register(Conference, EventTranslationOptions)
translator.register(Slider, PosterTranslationOptions)
translator.register(University, UniversityTranslationOptions)


class NewsAdmin(TabbedExternalJqueryTranslationAdmin):
    class Meta:
        model = News

    list_display = ['title_tr', 'description']


class SliderAdmin(TabbedExternalJqueryTranslationAdmin):
    class Meta:
        model = Slider

    list_display = ['title_tr']


class UniversityAdmin(TabbedExternalJqueryTranslationAdmin):
    class Meta:
        model = University

    list_display = ['name_tr']


class ConferenceAdmin(TabbedExternalJqueryTranslationAdmin):
    class Meta:
        model = Conference

    list_display = ['title_tr', 'description', 'date_start']


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
