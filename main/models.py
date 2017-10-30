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


class Conference(models.Model):
    EXTRA_CHOICES = (
        ('conference', 'Konferens'),
        ('kongre', 'Kongre'),
    )

    class Meta:
        verbose_name_plural = 'Концеренции'
        verbose_name = 'объект'

    mode = models.CharField(max_length=20, choices=EXTRA_CHOICES, verbose_name='Выберите тип')
    title = models.CharField(max_length=255, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    date_start = models.DateField(verbose_name='Дата проведения')

    active = models.BooleanField(default=False, verbose_name='Поставьте галочку чтобы'
                                                             ' отобразить мероприятия')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.title)

    def get_absolute_url(self):
        return "/conferences/%i/" % self.id


class NewsImage(models.Model):
    class Meta:
        verbose_name_plural = 'Картинки новостей'
        verbose_name = 'Картинку'

    news = models.ForeignKey(News, related_name='news_image', verbose_name='choose News')
    title = models.CharField(max_length=255, verbose_name='Title of image', blank=True, null=True)
    image = models.ImageField(upload_to='images/news', verbose_name='Image any size')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.title)


class EventImage(models.Model):
    class Meta:
        verbose_name_plural = 'Картинки мероприятий'
        verbose_name = 'Картинку'

    event = models.ForeignKey(Conference, related_name='event_image', verbose_name='choose Event')
    title = models.CharField(max_length=255, verbose_name='Title of image', blank=True, null=True)
    image = models.ImageField(upload_to='images/event', verbose_name='Image any size')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.title)


class Gallery(models.Model):
    class Meta:
        verbose_name_plural = 'Галерея'
        verbose_name = 'Картинку'

    title = models.CharField(max_length=255, verbose_name='Title of image', blank=True, null=True)
    image = models.ImageField(upload_to='images/gallery', verbose_name='Image any size')

    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self):
        return smart_unicode(self.title)
