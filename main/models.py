# coding=utf-8
from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.utils.encoding import smart_unicode


class News(models.Model):
    class Meta:
        verbose_name_plural = 'Новости'
        verbose_name = 'Новость'

    title = models.CharField(max_length=255, verbose_name='Заголовок поста', blank=True)
    description = models.TextField(verbose_name='Описание')
    image = models.ImageField(upload_to='news/images', verbose_name='Картинка обложки')
    content = RichTextUploadingField(verbose_name='контент новости')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.title)

    def get_absolute_url(self):
        return "/news/%i/" % self.id


class Slider(models.Model):
    class Meta:
        verbose_name_plural = 'Постеры'
        verbose_name = 'Постер'

    title = models.TextField(verbose_name='Описание постера')
    image = models.ImageField(upload_to='images/slider', verbose_name='Картинка Постера')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.title)


class University(models.Model):
    class Meta:
        verbose_name_plural = 'Университеты'
        verbose_name = 'университет'

    name = models.CharField(max_length=1000, verbose_name='Название Университета')
    image = models.ImageField(upload_to='images/universities', verbose_name='Картинка')
    link = models.URLField(blank=True, null=True)
    active = models.BooleanField(default=False, verbose_name='Поставьте галочку если это '
                                                             'один из главных Университетов')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.name)
