'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "description",
 *   "text-4": "primaryCTA",
 *   "link-0": "primaryCTAHref",
 *   "text-5": "secondaryCTA",
 *   "link-1": "secondaryCTAHref",
 *   "text-6": "trustText",
 *   "text-7": "stat1Value",
 *   "text-8": "stat1Label",
 *   "text-9": "stat2Value",
 *   "text-10": "stat2Label",
 *   "text-11": "stat3Value",
 *   "text-12": "stat3Label",
 *   "text-13": "stat4Value",
 *   "text-14": "stat4Label",
 *   "text-15": "feature1Title",
 *   "text-16": "feature1Description",
 *   "text-17": "feature2Title",
 *   "text-18": "feature2Description",
 *   "text-19": "feature3Title",
 *   "text-20": "feature3Description"
 * }
 */

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Users, Zap, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CTAProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  description?: string;
  primaryCTA?: string;
  primaryCTAHref?: string;
  secondaryCTA?: string;
  secondaryCTAHref?: string;
  trustText?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  stat4Value?: string;
  stat4Label?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature3Title?: string;
  feature3Description?: string;
}

export default function Cta({
  badge = 'Early Access Available',
  mainTitle = 'Scale Your Startup with',
  mainTitleHighlight = 'AI-Powered Infrastructure',
  description = 'Join 10,000+ developers building the future. Deploy faster, scale smarter, and ship with confidence using our next-generation cloud platform.',
  primaryCTA = 'Start Building Free',
  primaryCTAHref = '/temp',
  secondaryCTA = 'View Live Demo',
  secondaryCTAHref = '/temp',
  trustText = 'Trusted by innovative startups and Fortune 500 companies',
  stat1Value = '10K+',
  stat1Label = 'Developers',
  stat2Value = '99.99%',
  stat2Label = 'Uptime SLA',
  stat3Value = '50ms',
  stat3Label = 'Global Latency',
  stat4Value = '24/7',
  stat4Label = 'Expert Support',
  feature1Title = 'Zero Setup Time',
  feature1Description = 'Deploy in seconds with our CLI and GitHub integration',
  feature2Title = 'Enterprise Security',
  feature2Description = 'SOC 2 compliant with end-to-end encryption',
  feature3Title = 'Auto-Scaling',
  feature3Description = 'Handle traffic spikes without manual intervention',
}: CTAProps) {
  const router = useRouter();

  const handlePrimaryAction = () => {
    if (primaryCTAHref.startsWith('http://') || primaryCTAHref.startsWith('https://')) {
      window.open(primaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(primaryCTAHref);
    }
  };

  const handleSecondaryAction = () => {
    if (secondaryCTAHref.startsWith('http://') || secondaryCTAHref.startsWith('https://')) {
      window.open(secondaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(secondaryCTAHref);
    }
  };

  const stats = [
    { value: stat1Value, label: stat1Label, icon: Users },
    { value: stat2Value, label: stat2Label, icon: Shield },
    { value: stat3Value, label: stat3Label, icon: Zap },
    { value: stat4Value, label: stat4Label, icon: Sparkles },
  ];

  const features = [
    {
      title: feature1Title,
      description: feature1Description,
      bgColor: 'bg-primary/10',
      iconColor: 'bg-primary',
    },
    {
      title: feature2Title,
      description: feature2Description,
      icon: Shield,
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      title: feature3Title,
      description: feature3Description,
      icon: Zap,
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
                <Sparkles className="size-4 mr-2" />
                <span data-editable="badge">{badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span data-editable="mainTitle">{mainTitle}</span>
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  <span data-editable="mainTitleHighlight">{mainTitleHighlight}</span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                <span data-editable="description">{description}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4"
                  onClick={handlePrimaryAction}
                  data-editable-href="primaryCTAHref"
                  data-href={primaryCTAHref}
                >
                  <span data-editable="primaryCTA">{primaryCTA}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4"
                  onClick={handleSecondaryAction}
                  data-editable-href="secondaryCTAHref"
                  data-href={secondaryCTAHref}
                >
                  <span data-editable="secondaryCTA">{secondaryCTA}</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  <span data-editable="trustText">{trustText}</span>
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Company logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="space-y-2">
                  <div
                    className={`size-12 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    {Icon ? (
                      <Icon className={`size-6 ${feature.iconColor}`} />
                    ) : (
                      <div className={`size-6 rounded-full ${feature.iconColor}`} />
                    )}
                  </div>
                  <h3 className="font-semibold">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
