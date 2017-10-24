from django.contrib import admin

from main.models import News, Slider, University, Conference


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


admin.site.register(Conference, ConferenceAdmin)
admin.site.register(University, UniversityAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Slider, SliderAdmin)
