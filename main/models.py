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

