import {
  CpuChipIcon,
  CreditCardIcon,
  EnvelopeIcon,
  GiftIcon,
  IdentificationIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { NewfoldRuntime } from "@newfold-labs/wp-module-runtime";
import { Card, Title } from "@newfold/ui-component-library";
import { addUtmParams, getPlatformBaseUrl, getPlatformPathUrl } from "../../util/helpers";
import classNames from "classnames";

const isJarvis = NewfoldRuntime.sdk.isJarvis;

const base = [
  {
    icon: CpuChipIcon,
    id: "account_link",
    href: addUtmParams( getPlatformPathUrl("home", "app") ),
    label: __("Control Panel", "bluehost-wordpress-plugin"),
    color: "nfd-fill-gray",
  },
  {
    icon: GiftIcon,
    id: "products_link",
    href: addUtmParams( getPlatformPathUrl("market-place", "account_center#products") ),
    label: __("Products", "bluehost-wordpress-plugin"),
    color: "nfd-fill-primary-dark",
  },
  {
    icon: CreditCardIcon,
    id: "billing_link",
    href: addUtmParams( getPlatformPathUrl("renewal-center", "account_center#billing") ),
    label: __("Billing", "bluehost-wordpress-plugin"),
    color: "nfd-fill-primary",
  },
  {
    icon: EnvelopeIcon,
    id: "mail_link",
    href: addUtmParams( getPlatformPathUrl("home", "app#/email-office") ),
    label: __("Mail & Office", "bluehost-wordpress-plugin"),
    color: "nfd-fill-[#5b5b5b]",
  },
  {
    icon: ShieldCheckIcon,
    id: "security_link",
    href: addUtmParams( getPlatformPathUrl("security", "account_center#security") ),
    label: __("Security", "bluehost-wordpress-plugin"),
    color: "nfd-fill-[#17b212]",
  },
  {
    icon: IdentificationIcon,
    id: "validation_token_link",
    href: isJarvis
      ? addUtmParams( getPlatformPathUrl("account-center") )
      : addUtmParams( getPlatformBaseUrl("/cgi/token") ),
    label: __("Validation Token", "bluehost-wordpress-plugin"),
    color: "nfd-fill-[#f89c24]",
  },
];

export function AccountCard(props) {
  return (
    <Card>
      <Card.Content>
        <Title size={2}>Bluehost Account</Title>
        <ul className="nfd-grid nfd-grid-cols-3 nfd-h-full">
          {base.map((link) => (
            <li
              key={link.id}
              className="nfd-flex nfd-items-center nfd-justify-center"
            >
              <a
                href={link.href}
                className={classNames(
                  "nfd-flex nfd-flex-col nfd-gap-3",
                  "nfd-items-center nfd-text-center",
                  "nfd-text-[#404040] hover:nfd-text-primary"
                )}
              >
                <link.icon className={"nfd-w-12"} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Card.Content>
    </Card>
  );
}
