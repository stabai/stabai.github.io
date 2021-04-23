# How to Program Time ([stab.ai/time](http://stab.ai/time))

## Objective

Back in the early days of computing, the need for a precise, scientific measurement system for dates and times was not universally obvious. As a result, many implementations proliferated in different languages and frameworks. All of them were wrong, up until around 2005 or so. That new model separated several concepts into distinct entities that can be hard to grasp at first.

This document serves as a guide to help programmers understand that model, dispel confusion, and [hack time](https://www.youtube.com/watch?v=KEkrWRHCDQU).

**Note:** Lots of terminology used here is not quite universal, these are just the names that I'm using for specificity. Also, some concepts have slight variations in different time frameworks. Check your framework to make sure you're using the conceptual equivalents.

## What is Time?

Strictly speaking, there are two distinctly different things that we can mean when we say the word *time*. For the purpose of clarity, I'm going to name them *epoch time* and *civil time*.

### [Epoch Time (aka "Unix Time" aka "The Time Continuum")](https://en.wikipedia.org/wiki/Epoch_time)

Epoch time refers to an objective time continuum. The time continuum is like the number continuum: extends on to infinity, and 1 and 2 always have the same difference as 2 and 3. There are no units really, just points in the timeline that we'll call *instants*, and the way we define their quantity is arbitrary, as long as it's consistent. Its mathematical nature makes it ideal for use in science and computing.

**Note:** The name "Unix time" is probably more popular than the name "epoch time", but I'm going to use the latter. What we're talking about has nothing to do with Unix, and I think the name can be confusing.


### [Civil Time (aka "Human Time")](https://en.wikipedia.org/wiki/Civil_time)

Civil time refers to the way humans typically use time. You might think the mathematical nature of epoch time is also true for civil time, but it turns out it's only *mostly* true. Between calendar systems, multiple units of measurement, time zones, daylight savings time, leap years, and leap seconds, there are a lot of times when 2 + 1 does not equal 3.

#### A Quick Rant

Some lifeforms use a single timekeeping measurement, but we are a proud race with an abundance of completely unrelated versions of the same thing. Civil time's many units of measurement (e.g. hours, minutes, seconds, days, months, years) are only part of its complexity. It also has completely different kinds of measurements based on different things:

* Earth's orbit around the Sun: Years
* Moon's orbit around the Earth: Months
* Earth's rotation along its axis: Days (and to some extent, all sub-day measurements too)
* Electromagnetic radiation: Seconds and sub-seconds (though this one is fortunately contrived in a way to make a precisely measurable phenomenon map neatly to days)

Since these phenomena are completely unrelated, most conversions between them don't yield round numbers. A year is 365.24 days, and a [synodic month](https://en.wikipedia.org/wiki/Lunar_phase) is 29.53 days. Many of our complex timekeeping rules come from attempts to fix these incongruities between different units.

### Mapping Time

To make epoch time and civil time play nice together, we map both concepts of time onto a `TimeZone`, or a set of rules for handling time. Those rules allow us to understand exactly what any given civil time means in a precise, absolute, universal sense (epoch time). Essentially, we can think of time zones as an adapter between epoch time and civil time.

![Timeline Example](/resources/timeline.png)

But this abstraction is starting to get pretty complex. Let's take a step back.

## Time Data Types

Let's look deeper into the different data types we can use for working with the various aspects of time.

### TimeZone

A `TimeZone` is a complete set of rules about how to interpret time in a given location. It must have a detailed enough set of rules to precisely convert between epoch time and civil time.

It's important to note that the term "time zone" is used to mean different things. It could mean a simple UTC offset, or a formal [tz database](https://en.wikipedia.org/wiki/Tz_database) time zone with detailed rules. It is *HIGHLY* advisable that you *ONLY* specify tz database time zone IDs (e.g. *America/Los_Angeles*), and let your time framework do everything else.

### Epoch Time

* **Units**: Arbitrary (but typically measured in some sub-second unit, like milliseconds)
* **Dimension**: Infinite Range
* **Typical Use Case**: Most of computing

An unending range containing all of time, measured using any uniform standard. The unit we use to measure it is arbitrary, just like how we can arbitrarily decide to use feet or meters to measure distance.

#### `Instant`

* **Time**: Epoch time
* **Units**: Arbitrary (but typically measured in some sub-second unit, like milliseconds)
* **Composition**: 64-bit integer (time between point and start of epoch)
* **Dimension**: Single Point
* **Typical Use Case**: Timestamps

An instant is a single point in epoch time. It has no duration.

#### `Duration`

* **Time**: Epoch time
* **Units**: Arbitrary (but typically measured in some sub-second unit, like milliseconds)
* **Composition**: 64-bit integer (time contained within duration)
* **Dimension**: Finite Range
* **Typical Use Case**: Timers/stopwatches

A duration is a quantity of time contained between two points in epoch time. It's simply the difference between a starting `Instant` and an ending `Instant`.

### Local Civil Time

* **Units**: Years, Months, Days, Hours, Minutes, Seconds, and sub-seconds
* **Dimension**: Infinite Range
* **Typical Use Case**: Human-to-human communication where `TimeZone` is implied

The time that a human or civilian authority would use, having different meaning dependent on `TimeZone`.

#### `LocalDate`

* **Time**: Civil time
* **Units**: Years, Months, Days
* **Composition**: Several 32-bit integers: years, months, and days
* **Dimension**: Single Point (but fractional values are impossible)
* **Typical Use Case**: All day calendar event

A local date is a point in civil time, but with precision limited to day integers. This type cannot contain fractions of days (e.g. hours, minutes, seconds), but it usually has methods like `atStartOfDay()` and `atTime()` that allow you to convert it to a `LocalDateTime`.

#### `LocalTime`

* **Time**: Civil time
* **Units**: Hours, Minutes, Seconds, and sub-seconds
* **Composition**: Several 32-bit integers: hours, minutes, seconds, and sub-seconds
* **Dimension**: Single Point (but that point is in the generic day cycle, not on a specific day)
* **Typical Use Case**: Daily alarms

A local time is a point in civil time, but limited in scope to a time of day. This type cannot contain the date that time belongs to, but it usually has a method like `atDate()` that allows you to convert it to a `LocalDateTime`.

#### `LocalDateTime`

* **Time**: Civil time
* **Units**: Years, Months, Days, Hours, Minutes, Seconds, and sub-seconds
* **Composition**: `LocalDate` + `LocalTime`
* **Dimension**: Single Point
* **Typical Use Case**: One-time alarm

A local date & time is a single point in civil time, *without* a specific `TimeZone`. This means that it will map to a different `Instant` depending on which `TimeZone` is applied to it.

#### `Period`

* **Time**: Civil time
* **Units**: Years, Months, Days, Hours, Minutes, Seconds, and sub-seconds.
* **Composition**: Several 32-bit integers: years, months, days, hours, minutes, seconds, and sub-seconds
* **Dimension**: Finite Range
* **Typical Use Case**: Weekly, monthly, or yearly recurring events

A period is an amount of time measured by civil time units.

Since it's defined *without* a specific `TimeZone` or start time, it will map to a different `Duration` depending on which ones are applied to it. Since the `TimeZone` will have different rules during different points in time, both of those properties can alter the `Duration` that a `Period` represents.

**IMPORTANT:** A period of 1 day is **NOT** equivalent to a period of 24 hours! A day respects Daylight Savings Time and other complex civil time rules. So depending on the time zone and start time applied to it, a period of 1 day could be anywhere from 23 to 25 hours.

### **Zoned Time**

* **Time**: Civil & Epoch time
* **Units**: Arbitrary (can work with civil time units or abstract epoch time values)
* **Dimension**: Infinite Range
* **Typical Use Case**: Human-to-computer communication where `TimeZone` is known

The hybrid model that pairs a `TimeZone` with data from either civil time or epoch time, and can be mapped to either time system.

#### `ZonedDateTime`

* **Time**: Civil & Epoch time
* **Units**: Arbitrary (can work with civil time units or abstract values of epoch time)
* **Composition**: `Instant` + `TimeZone` + `LocalDateTime`
* **Dimension**: Single Point
* **Typical Use Case**: Meeting time (scheduled in one `TimeZone`, but might be attended from any `TimeZone`)

A zoned date & time is a single point in either civil or epoch time, *with* a specific `TimeZone` that allows conversion between the two.

Because zoned time can handle both civil and epoch time, it can perform arithmetic operations with either a `Duration` or a `Period`.

### More Terms

There are also a few more terms that help us avoid some common pitfalls that we'll explore in the next section:

* **Start of Day**: The generic name for the time when a day first starts (because we shouldn't assume that would be midnight for every day)
* **Standard Days/Seconds/etc** A duration of time measured in those units *if there are no special incidents between the two*
    * Useful if we want to calculate the epoch time difference between two unknown points in civil time, and it doesn't matter if we're off by a small amount
    * It's always better to use your date/time framework to do these functions, when possible
* **Clock / Time Source**: A thing that measures the current point in the time continuum

## Best Practices

### Default to Epoch Time

When working with time in programming, the default choice should always be to store it in epoch time. Only use some other format if there is a compelling reason to do so. You should generally only convert to civil time at the outer edges of a system (e.g. when interfacing with a human, use their time zone).

### Use a `Clock`/`TimeSource`

When you want to get the current time in code, it's tempting to just use `new DateTime()`. However, this has some issues.

First, it assumes that you always want to use the system clock. This is usually a bad idea in automated tests because you want tests to be deterministic, and the system clock is by definition not deterministic. Decoupling values of time from the system clock allows for better code readability and maintainability.

It also assumes that the system time zone is the right one for your case. It could be, but it frequently isn't. The system clock on your server is almost never the right choice for users of your service. Quite often, there is actually *NO* meaningful time zone to store. So we should once again always default to epoch time, and many `Clock` implementations force this.

### Use a Time Framework, and Use it Well

It's highly advisable that you **NOT** perform manual time arithmetic. Any time you find yourself manually converting units or adding them together, try to train yourself to stop and use the framework instead.

For example, if I want to schedule a process to run tomorrow at the current time of day, I might be tempted to do something simple like this:

```java
long timeToRun = new DateTime().toMillis() + 8640000;
```

Unfortunately, there are some problems with this:

1. This result could be off by up to an hour. The operation we did is "24 standard hours from right now", when we actually wanted "tomorrow at the current time of day". The former uses epoch time units, but the latter uses civil units. The problem is that we never used a `TimeZone` to map to civil time. In reality, there are not 60 seconds in all minutes, and there are not 24 hours in all days.
2. This code uses [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)). Will a future reader of your code know the meaning and reason for 8640000? If you type one of these numbers in wrong, will you notice? If you do the math wrong, will your code reviewer spot it? There are a lot of chances for human error here, and proper use of your time API will remove many of them.
    * Your brain cares so little about large numbers that you didn't even realize I left off a 0.

What we should prefer to do in this case is:

```java
ZonedDateTime now = clock.now().toZonedDateTime(userTimeZone);
ZonedDateTime timeToRun = now + Period.days(1);
```

This code is slightly more verbose, but:

1. It will give us precisely the right time.
2. The verbosity is a good thing in this case. Practically anyone can now read this without having to make any guesses about intent. Shorter code is often harder to read because it can sacrifice clarity in favor of brevity. Clarity is usually much more valuable.
3. If you had tried to do something inaccurate, the time API may have prevented it. For example, `Instant` doesn't usually have any method to add a `Period`, but `ZonedDateTime` does. Whenever you can take advantage of type semantics to avoid illegal operations, it's a win.

Let's take a look at a more complex example of how the API can save you from writing tedious code. What if we wanted to have our process run at some arbitrary, user-specified time tomorrow? Our manual code might look something like this:

```java
Date today = new Date();
long timestampInMillis = today.toMillis();
timestampInMillis += 24 * 60 * 60 * 1000;
timestampInMillis += userSpecifiedTime.hours * 60 * 60 * 1000;
timestampInMillis += userSpecifiedTime.minutes * 60 * 1000;
timestampInMillis += userSpecifiedTime.seconds * 1000;
timestampInMillis += userSpecifiedTime.millis;
```

I didn't put any mathematical errors into those calculations (as far as I know), but there sure were a lot of places for them to sneak in (multiplying by 1000 is very easy to forget). Also, the final answer will not be correct on non-standard days.

But using our time API correctly, it should look more like this:

```java
LocalDate today = LocalDate.ofInstant(clock.now(), userTimeZone);
LocalDate tomorrow = today + Period.days(1);
ZonedDateTime timeToRun = tomorrow.atTime(userSpecifiedTime).atZone(userTimeZone);
```

In addition to always yielding the right answer, this code replaces cryptic formulas with self-documenting calls.

### Don't Decompose Time

There are some times when we have to work with time using existing code that doesn't properly support it. For example, let's say I have a function that will tell me the first workday of the current month. But the existing convention for calling this might be as follows:

```java
ZonedDateTime today = clock.now().toZonedDateTime(userTimezone);
int firstWorkday = firstWorkdayOfMonth(today.year, today.month);
```

Even though we used our time API correctly, we still broke the abstraction of the time API that keeps us from shooting ourselves in the foot. We have suddenly opened ourselves up to several potential errors:

* The order of the year and month arguments could be backwards
* The function might expect a 0-indexed month, while our time API gives us a 1-indexed month
* The returned workday could be misused (e.g. it's 0-indexed, we accidentally apply it to the wrong date)

What we should do instead is rewrite that old function to use the proper types, so that we can call it like this:

```java
YearMonth currentMonth = YearMonth.ofInstant(clock.now(), userTimeZone);
ZonedDateTime firstWorkday = firstWorkdayOfMonth(currentMonth, userTimezone);
```

To accomplish this, we'd ideally do the following:

1. Add a new implementation of the function that uses our time API's proper types
2. Change the old function to simply be a wrapper around the new function
3. Mark the old function as deprecated to discourage/prevent new calls
4. Replace all existing calls to the old function with calls to the new function
5. Remove the old function

The only problem is that we might be unable to rewrite that old function because we don't own that code. If that's the case, then instead of fixing the problem at its source, we ~~hide it in the closet~~ fix it in one standard wrapper function that we always use instead of the external function. To do that, we should:

1. Add our own wrapper version of the function that uses our time API's proper types
2. Test the crap out of that wrapper function to make sure it always behaves properly
3. Outlaw uses of the external function by whatever means possible to prevent new calls
    1. A static analysis tool like a linter can often be a good way of doing this
    2. Your continuous integration system might provide a way of doing this
    3. If all else fails, just mock anyone who uses it mercilessly
4. Replace all existing calls to the old function with calls to the new function
5. Outlaw all uses of the external function by whatever means possible
    1. All strategies mentioned in step 3 should probably work here too
    2. Depending on your source control and build systems, you may be able to limit the visibility of that external function so that only the wrapper code can access it

## Common Misconceptions About Time

Because of the various rules of different time zones, the following **CANNOT** be assumed:

* Every year/day/etc has the same duration (DST, leap years, and leap seconds cause the lengths of most civil units to vary)
* All days start at midnight (time zones can make DST changes at midnight)
* Any given time only occurs once in each day (DST causes time to "fall back" and repeat an hour)
* Any given time occurs every day (DST causes time to "spring forward" and skip an hour)
* A greater number in civil time always references an earlier point in time than a lesser one (DST causes time to "fall back", so 2:59 may be followed by 2:00)
* UTC offsets can be used as a stand-in for time zones (time zones are unfortunately far more complicated... have I mentioned DST?)
* All time zones follow the same behavioral rules (lol)
* The duration between two points in time can be calculated with simple arithmetic (only if you account for all the many rules of every time zone, which you will almost certainly get wrong)
* The system clock alone can be used to derive the civil time
    * It's our best resource for getting the current epoch time, but there are many cases when the time zone of the machine running your application is unknown or unpredictable
    * We still need the user's accurate time zone to translate between epoch and civil time (the system clock could be a good way for us to find that on phone apps, but it's a bad way for server apps)
* Storing a civil time and storing an epoch time are equivalent (they are inherently different things, and require a time zone for mapping)
    * Most times we want to store an epoch time, and that should be our default assumption
    * There are some exceptions when storing a civil time is the right thing to do (e.g. a setting for a daily alarm clock should map to civil time rather than epoch time)

There are also a couple of truths that we generally shouldn't rely on either, because they're often violated when using a fake clock in unit tests:

* Time ticks on regularly
* When time changes, it always moves forward

## FAQs

### What's a *standard* day?

A standard day is a day with exactly 86,400 (60 seconds * 60 minutes * 24 hours) standard seconds. As we've seen, this is often not the case because of Daylight Savings Time and leap seconds.

I don't believe any time zones use non-standard *seconds*, but it is a complexity accounted for by [some time libraries](http://joda-time.sourceforge.net/apidocs/org/joda/time/Duration.html#getStandardSeconds()).

### What's an epoch?

Epoch is just another word for a period of time, like the word *era*. In the computing sense, we mark `January 1, 1970 @ 00:00:00 UTC` as the beginning of the computing epoch. This doesn't really mean much, but it sets a standard reference point on the time continuum. It's the origin, or the 0, on our time axis. We reference all other points on the timeline as the amount of time that has passed since that reference point. This means that all times before the `70s are negative, because they are on the opposite side of the origin.

It's common to see this word used in a sense like "milliseconds since epoch", which just means the number of milliseconds that have elapsed since that standard reference point.

### What's a nano adjustment?

Many time frameworks standardize on milliseconds as their smallest unit of measurement, since it's pretty precise but still allows us to track a very wide time range in a single 64-bit integer. However, there are certain applications where millisecond precision is not enough. Rather than vastly limit the range of trackable time, many frameworks handle this by adding a field called a `nanoAdjustment` or something similar. This essentially adds a component to our `Instant`, so it's now a 64-bit integer containing number of seconds since epoch, and a 32-bit integer with number of nanoseconds since that second. This allows much more precision, while also keeping the same fundamental system and often times extending the trackable time range (if the main number changed from milliseconds to seconds).

### Can't I just always use a `ZonedDateTime`?

You can, but it's a bad idea. It's true that a `ZonedDateTime` can navigate both epoch time and civil time like a boss, but it's also a more complicated type that's harder to serialize and store properly. It's not worth the headache it will cause if you don't need it. Even when you do need to store it, you often have to decompose it into an `Instant`+`TimeZone` for optimum serialization. Furthermore, there are many times when there is no time zone with any logical meaning; having an illogical time zone there (inviting programmers to use it) can result in some very insidious bugs. This is why many `Clock` interfaces return an `Instant` instead of a `ZonedDateTime`.

### Can't this all be simpler?

Sure, if we abolish Daylight Savings Time, time zones, leap years, and leap seconds... and get the whole world to agree... and never need to reference times in the past before they were abolished. And abolishing those things would cause the calendar to get strange, because they account for the fact that we have multiple types of time units that would get out of sync, like Earth orbit (years), Earth rotation (days), and moon orbit (months).

The unfortunate truth is that this is an accurate model of the insanely complex timekeeping system our world has for the foreseeable future. All the simpler models we have are only simpler because they oversimplify, leading to inaccurate and often unpredictable results.

### Can we just keep counting time this way forever? Or will it eventually get too big?

This is actually a difficult question to answer, and we'll have to borrow some data from astrophysics to do it. We usually store timestamps in a 64-bit integer. That means it can count back to more than -400 quadrillion seconds before 1970 (approximate time of the Big Bang). So if we're measuring in seconds (and we assume that 1970 is the exact middle point of the life of the universe), that means we're good! But if we're even counting in milliseconds, that jumps up to -400 quintillion, and a 64-bit integer is no longer enough. Plus, the heat death of the universe is estimated at more like 10 googols. So if we want millisecond accuracy from Big Bang to Gnab Gib, we'd need about a 33,230-bit integer.

### Is that question really asked very frequently?

Define frequently.

### How should I work with time in my application?

These days, there are pretty good options for just about any language. This guide helps you learn how to work with time correctly, but starting with a good framework is important.

* Java
    * Java 8+: The new built-in [`java.time` library](https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html) is awesome
    * Java 7 and older: Use [JodaTime](https://www.joda.org/joda-time/)
    * **IMPORTANT:** NEVER, EVER use `java.util.Date` and its related types! It was built a long time ago in a galaxy far far away, and it contains fundamental mistakes in its handling of time!
* JavaScript/TypeScript
    * When [Temporal](https://tc39.es/proposal-temporal/docs/index.html) is available, use that
    * Otherwise, use [Luxon](https://moment.github.io/luxon/) or [Moment.js](https://momentjs.com/) (see the [differences](https://moment.github.io/luxon/docs/manual/moment.html))
    * **IMPORTANT:** NEVER, EVER use the built-in `Date` and its related types! It was built a long time ago in a galaxy far far away, and it contains fundamental mistakes in its handling of time!

TODO: Add more languages

### Why did you write this guide?

It took me years to understand all of this, and I hope to help others get there quicker. I had been programming for over 10 years before I figured all this out, yet many people wrongly assume this is "common knowledge". I want you to be able to point people to a quick read that will help them fully grasp the concept, and that they can reference later. Taking the time to explain this to them yourself in great detail (that they'll likely not retain the first time) is a lot to ask.

## Other Resources

There are other guides to this subject with useful insight. They're also worth the read if you still have questions or confusion.

* [Understanding Time Zones](https://lyonheart.us/articles/understanding-time-zones/) by Matthew Lyon
* [Falsehoods programmers believe about time](https://gist.github.com/timvisee/fcda9bbdff88d45cc9061606b4b923ca#falsehoods-programmers-believe-about-time) compiled by Tim Visée

## Contributing

This page was written by [@shawntabai](https://github.com/shawntabai), but contributions are welcome. I'll be happy to add your name for attribution too.
